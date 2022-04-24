import { expect } from "chai"
import { ethers } from "hardhat"
import { BigNumber } from "ethers"
import { MerkleTree } from "merkletreejs"
import keccak256 from "keccak256"
import { Sharkfrens } from "../../typechain-types/Sharkfrens"
import { createSlicer, createProduct, getSelector } from "../../utils"
import { SLXAddress } from "../../utils/deployJB/deployJB"
import {
  a0,
  a1,
  a2,
  a3,
  isPurchaseAllowedSignature,
  onProductPurchaseSignature,
  productsModule,
} from "../setup"

describe("{Sharkfrens}", () => {
  let slicerAddr: string
  let sharkfrens: Sharkfrens
  let merkleTree: MerkleTree
  let slicerId: number

  it("ProductPurchase contract is deployed and initialized", async () => {
    const SHARKFRENS = await ethers.getContractFactory("Sharkfrens")

    const allowedAddresses = [a0, a1, a2, a3]
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
      productsModule.address,
      slicerId
    )) as Sharkfrens
    await sharkfrens.deployed()

    await sharkfrens._setMerkleRoot(1, merkleRoot)

    await createProduct(slicerId, slicerAddr, 1, 100, [], true, false, [], {
      externalAddress: sharkfrens.address,
      checkFunctionSignature: isPurchaseAllowedSignature,
      execFunctionSignature: onProductPurchaseSignature,
      data: [],
      value: ethers.utils.parseEther("0"),
    })
    await createProduct(slicerId, slicerAddr, 5, 100, [], true, false, [], {
      externalAddress: sharkfrens.address,
      checkFunctionSignature: isPurchaseAllowedSignature,
      execFunctionSignature: onProductPurchaseSignature,
      data: [],
      value: ethers.utils.parseEther("0"),
    })
  })
})
