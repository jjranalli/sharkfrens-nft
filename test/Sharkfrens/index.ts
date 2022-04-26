import { expect } from "chai"
import { ethers } from "hardhat"
import { MerkleTree } from "merkletreejs"
import keccak256 from "keccak256"
import { SharkFrens } from "../../typechain-types/SharkFrens"
import { createSlicer, createProduct } from "../../utils"
import {
  a0,
  a1,
  a2,
  a3,
  a4,
  addr1,
  isPurchaseAllowedSignature,
  onProductPurchaseSignature,
  productsModule,
} from "../setup"

describe("{Sharkfrens}", () => {
  let slicerAddr: string
  let sharkfrens: SharkFrens
  let merkleTree: MerkleTree
  let slicerId: number

  it("ProductPurchase contract is deployed and initialized", async () => {
    const SHARKFRENS = await ethers.getContractFactory("SharkFrensTest")

    const allowedAddresses = [a1, a2]
    const leafNodes = allowedAddresses.map((addr) => keccak256(addr))
    merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
    const merkleRoot = merkleTree.getHexRoot()

    const { slicerAddress, tokenId } = await createSlicer(
      [
        { account: a0, shares: 90 },
        { account: a1, shares: 10 },
      ],
      20,
      0,
      0,
      [],
      false
    )
    slicerAddr = slicerAddress
    slicerId = tokenId

    sharkfrens = (await SHARKFRENS.deploy(
      "Shark Frens",
      "FRENS",
      productsModule.address,
      slicerId
    )) as SharkFrens
    await sharkfrens.deployed()

    await sharkfrens._setMerkleRoot(1, merkleRoot)
    await sharkfrens._setMerkleRoot(2, merkleRoot)

    await createProduct(slicerId, slicerAddr, 1, 62, [], true, false, [], {
      externalAddress: sharkfrens.address,
      checkFunctionSignature: isPurchaseAllowedSignature,
      execFunctionSignature: onProductPurchaseSignature,
      data: [],
      value: ethers.utils.parseEther("0"),
    })
    await createProduct(slicerId, slicerAddr, 1, 100, [], true, false, [], {
      externalAddress: sharkfrens.address,
      checkFunctionSignature: isPurchaseAllowedSignature,
      execFunctionSignature: onProductPurchaseSignature,
      data: [],
      value: ethers.utils.parseEther("0"),
    })
  })

  describe("isPurchaseAllowed", () => {
    it("Product #1 - Returns true if in allowlist, false if not", async () => {
      const proofA1 = merkleTree.getHexProof(keccak256(a1))
      const buyerCustomDataA1 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA1]
      )
      const isAllowedA1 = await sharkfrens.isPurchaseAllowed(
        slicerId,
        1,
        a1,
        1,
        [],
        buyerCustomDataA1
      )

      const proofA4 = merkleTree.getHexProof(keccak256(a4))
      const buyerCustomDataA4 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA4]
      )
      const isAllowedA4 = await sharkfrens.isPurchaseAllowed(
        slicerId,
        1,
        a4,
        1,
        [],
        buyerCustomDataA4
      )

      expect(isAllowedA1).to.be.equal(true)
      expect(isAllowedA4).to.be.equal(false)
    })

    it("Product #2 - Returns true if in allowlist, false if not", async () => {
      const proofA1 = merkleTree.getHexProof(keccak256(a1))
      const buyerCustomDataA1 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA1]
      )
      const isAllowedA1 = await sharkfrens.isPurchaseAllowed(
        slicerId,
        2,
        a1,
        1,
        [],
        buyerCustomDataA1
      )

      const proofA4 = merkleTree.getHexProof(keccak256(a4))
      const buyerCustomDataA4 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA4]
      )
      const isAllowedA4 = await sharkfrens.isPurchaseAllowed(
        slicerId,
        2,
        a4,
        1,
        [],
        buyerCustomDataA4
      )

      expect(isAllowedA1).to.be.equal(true)
      expect(isAllowedA4).to.be.equal(false)
    })
  })
  describe("onProductPurchase", () => {
    it("Product #1 - 2 NFT minted on purchase to a1", async () => {
      const initBalance = await sharkfrens.balanceOf(a1)

      const proofA1 = merkleTree.getHexProof(keccak256(a1))
      const buyerCustomDataA1 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA1]
      )

      await productsModule.payProducts(a1, [
        {
          slicerId,
          productId: 1,
          quantity: 1,
          currency: ethers.constants.AddressZero,
          buyerCustomData: buyerCustomDataA1,
        },
      ])

      const finalBalance = await sharkfrens.balanceOf(a1)

      expect(finalBalance.sub(initBalance)).to.be.equal(2)
      expect(await sharkfrens.ownerOf(1)).to.be.equal(a1)
      expect(await sharkfrens.ownerOf(2)).to.be.equal(a1)
      expect(await sharkfrens.totalSupply()).to.be.equal(2)
    })

    it("Product #2 - 1 NFT minted on purchase to a1", async () => {
      const initBalance = await sharkfrens.balanceOf(a1)

      const proofA1 = merkleTree.getHexProof(keccak256(a1))
      const buyerCustomDataA1 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA1]
      )

      await productsModule.payProducts(a1, [
        {
          slicerId,
          productId: 2,
          quantity: 1,
          currency: ethers.constants.AddressZero,
          buyerCustomData: buyerCustomDataA1,
        },
      ])

      const finalBalance = await sharkfrens.balanceOf(a1)

      expect(finalBalance.sub(initBalance)).to.be.equal(1)
      expect(await sharkfrens.ownerOf(5)).to.be.equal(a1)
      expect(await sharkfrens.totalSupply()).to.be.equal(3)
    })

    it("Product #1 - 2 NFT minted on purchase to a2", async () => {
      const initBalance = await sharkfrens.balanceOf(a2)

      const proofA2 = merkleTree.getHexProof(keccak256(a2))
      const buyerCustomDataA2 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA2]
      )

      await productsModule.payProducts(a2, [
        {
          slicerId,
          productId: 1,
          quantity: 1,
          currency: ethers.constants.AddressZero,
          buyerCustomData: buyerCustomDataA2,
        },
      ])

      const finalBalance = await sharkfrens.balanceOf(a2)

      expect(finalBalance.sub(initBalance)).to.be.equal(2)
      expect(await sharkfrens.ownerOf(3)).to.be.equal(a2)
      expect(await sharkfrens.ownerOf(4)).to.be.equal(a2)
    })

    it("Product #2 - 1 NFT minted on purchase to a2", async () => {
      const initBalance = await sharkfrens.balanceOf(a2)

      const proofA2 = merkleTree.getHexProof(keccak256(a2))
      const buyerCustomDataA2 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA2]
      )

      await productsModule.payProducts(a2, [
        {
          slicerId,
          productId: 2,
          quantity: 1,
          currency: ethers.constants.AddressZero,
          buyerCustomData: buyerCustomDataA2,
        },
      ])

      const finalBalance = await sharkfrens.balanceOf(a2)

      expect(finalBalance.sub(initBalance)).to.be.equal(1)
      expect(await sharkfrens.ownerOf(6)).to.be.equal(a2)
    })
  })

  describe("totalSupply", () => {
    it("Returns correct supply", async () => {
      expect(await sharkfrens.totalSupply()).to.be.equal(6)
    })
  })

  describe("tokenURI", () => {
    it("Returns correct tempURI based on tokenId", async () => {
      expect(await sharkfrens.tokenURI(1)).to.be.equal("1")
      expect(await sharkfrens.tokenURI(2)).to.be.equal("2")
      expect(await sharkfrens.tokenURI(5)).to.be.equal("3")
    })
  })

  describe("setMerkleRoot", () => {
    it("Owner can set Merkle root for new allowlist", async () => {
      const bytes32String = ethers.utils.formatBytes32String("asd")
      await expect(sharkfrens._setMerkleRoot(4, bytes32String)).to.not.be
        .reverted
    })
  })

  describe("Reverts", () => {
    it("onProductPurchase - Not in allowlist", async () => {
      const proofA4 = merkleTree.getHexProof(keccak256(a4))
      const buyerCustomDataA4 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA4]
      )

      await expect(
        productsModule.payProducts(a4, [
          {
            slicerId,
            productId: 1,
            quantity: 1,
            currency: ethers.constants.AddressZero,
            buyerCustomData: buyerCustomDataA4,
          },
        ])
      ).to.be.reverted
    })

    it("onProductPurchase - Wrong proof", async () => {
      const proofA1 = merkleTree.getHexProof(keccak256(a1))
      const buyerCustomDataA1 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA1]
      )

      await expect(
        productsModule.payProducts(a2, [
          {
            slicerId,
            productId: 1,
            quantity: 1,
            currency: ethers.constants.AddressZero,
            buyerCustomData: buyerCustomDataA1,
          },
        ])
      ).to.be.reverted
    })
  })

  it("Only contract owner can set Merkle root for new allowlists", async () => {
    const bytes32String = ethers.utils.formatBytes32String("asd")
    await expect(sharkfrens.connect(addr1)._setMerkleRoot(5, bytes32String)).to
      .be.reverted
  })
})
