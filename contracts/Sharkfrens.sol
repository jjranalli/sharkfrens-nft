// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./extensions/Purchasable/SlicerPurchasable.sol";
import "@rari-capital/solmate/src/tokens/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Sharkfrens is ERC721, SlicerPurchasable, Ownable {
    /// ============ Errors ============

    // Thrown when an invalid query is made
    error Invalid();
    // Thrown when max supply set is reached
    error MaxSupply();

    /// ============ Libaries ============

    using Counters for Counters.Counter;
    using Strings for uint256;

    /// ============ Storage ============

    // Token ID counter
    Counters.Counter private _tokenIds;
    // Base URI
    string private _baseURI;
    // Mapping from productIds to Merkle roots
    mapping(uint256 => bytes32) _merkleRoots;

    constructor(
        string memory name_,
        string memory symbol_,
        address productsModuleAddress_,
        uint256 slicerId_
    ) ERC721(name_, symbol_) SlicerPurchasable(productsModuleAddress_, slicerId_) {}

    /// ============ Functions ============

    /**
     * @notice Overridable function containing the requirements for an account to be eligible for the purchase.
     *
     * @dev Used on the Slice interface to check whether a user is able to buy a product. See {ISlicerPurchasable}.
     * @dev Max quantity purchasable per address and total mint amount is handled on Slicer product logic
     */
    function isPurchaseAllowed(
        uint256,
        uint256,
        address,
        uint256,
        bytes memory,
        bytes memory
    ) public view override returns (bool isAllowed) {
        // Add all requirements related to product purchase here
        // Return true if account is allowed to buy product
        return true;
    }

    /**
     * @notice Overridable function to handle external calls on product purchases from slicers. See {ISlicerPurchasable}
     */
    function onProductPurchase(
        uint256 slicerId,
        uint256 productId,
        address account,
        uint256 quantity,
        bytes memory slicerCustomData,
        bytes memory buyerCustomData
    ) external payable override onlyOnPurchaseFrom(slicerId) {
        // Check whether the account is allowed to buy a product.
        if (
            !isPurchaseAllowed(
                slicerId,
                productId,
                account,
                quantity,
                slicerCustomData,
                buyerCustomData
            )
        ) revert NotAllowed();

        // Add product purchase logic here
    }

    /**
     * Returns URI of tokenId
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        if (tokenId > _tokenIds.current()) revert Invalid();

        return
            string(abi.encodePacked(_baseURI, tokenId.toString()));
    }

    function totalSupply() external view returns (uint256) {
        return _tokenIds.current();
    }

    /**
     * Sets _baseURI
     *
     * @dev Only accessible to contract owner
     */
    function _setBaseURI(string memory baseURI_) external onlyOwner {
        _baseURI = baseURI_;
    }

    /**
     * Sets merkleRoot for productId
     *
     * @dev Only accessible to contract owner
     */
    function _setMerkleRoot(uint256 productId, bytes32 merkleRoot) external onlyOwner {
        _merkleRoots[productId] = merkleRoot;
    }

    /**
     * Mints 1 NFT and increases tokenId
     */
    function _mint(address to) private {
        _tokenIds.increment();
        _safeMint(to, _tokenIds.current());
    }
}
