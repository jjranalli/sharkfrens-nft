// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../extensions/Purchasable/SlicerPurchasable.sol";
import "@rari-capital/solmate/src/tokens/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "../structs/Drop.sol";

/// @dev SharkFrens implementation, with DROP1_UNITS = 4 for testing purposes

contract SharkFrensTest is ERC721, SlicerPurchasable, Ownable {
    /// ============ Errors ============

    // Thrown when an invalid query is made
    error Invalid();
    // Thrown when max supply set is reached
    error MaxSupply();

    /// ============ Storage ============

    // Total number of tokens to be minted in drop 1
    /// @dev drop[1] has 4 NFTs in test
    uint8 private constant DROP1_UNITS = 2;
    // Mapping from artwork Ids to tokenURIs
    mapping(uint256 => string) _tokenURIs;
    // Mapping from product Ids to Drop
    mapping(uint256 => Drop) _drops;

    /// ============ Constructor ============

    constructor(
        string memory name_,
        string memory symbol_,
        address productsModuleAddress_,
        uint256 slicerId_
    ) ERC721(name_, symbol_) SlicerPurchasable(productsModuleAddress_, slicerId_) {
        _drops[2].tokenId = DROP1_UNITS * 2;
    }

    /// ============ Functions ============

    /**
     * @notice Overridable function containing the requirements for an account to be eligible for the purchase.
     *
     * @dev Used on the Slice interface to check whether a user is able to buy a product. See {ISlicerPurchasable}.
     * @dev Max quantity purchasable per address and total mint amount is handled on Slicer product logic
     * @dev Returns true if account is allowed to buy product
     */
    function isPurchaseAllowed(
        uint256,
        uint256 productId,
        address account,
        uint256,
        bytes memory,
        bytes memory buyerCustomData
    ) public view override returns (bool isAllowed) {
        // Get Merkle proof from buyerCustomData
        bytes32[] memory proof = abi.decode(buyerCustomData, (bytes32[]));

        // Generate leaf from account address
        bytes32 leaf = keccak256(abi.encodePacked(account));

        // Check if Merkle proof is valid
        isAllowed = MerkleProof.verify(proof, _drops[productId].merkleRoot, leaf);
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
        /// @dev Overflow not possible with number of allowlisted addresses
        unchecked {
            // If product #1 is being purchased
            if (productId == 1) {
                // Add reference for current tokenId of drop[1] + 1
                uint256 tokenId = _drops[1].tokenId + 1;
                // Mint two tokens with ID [X] and [X + DROP1_UNITS]
                _safeMint(account, tokenId);
                _safeMint(account, tokenId + DROP1_UNITS);
                // Update tokenId of drop[1]
                _drops[1].tokenId++;
            } else if (productId == 2) {
                // Mint one token with current tokenId of drop[2]
                _safeMint(account, _drops[2].tokenId + 1);
                // Update tokenId of drop[2]
                _drops[2].tokenId++;
            }
        }
    }

    /**
     * @notice Returns URI of tokenId
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        // If in drop[2]
        if (tokenId > DROP1_UNITS * 2) {
            return _tokenURIs[3];
        }
        // If in drop[1] and tokenId is in the second half
        else if (tokenId > DROP1_UNITS) {
            return _tokenURIs[2];
        }
        // If in drop[1] and tokenId is in the first half
        else {
            return _tokenURIs[1];
        }
    }

    /**
     * @notice Returns totalSupply
     *
     * Calculated from current tokenIds of drop[1] and drop[2]
     */
    function totalSupply() external view returns (uint256) {
        return (_drops[1].tokenId * 2) + _drops[2].tokenId - (DROP1_UNITS * 2);
    }

    /**
     * Sets merkleRoot for productId
     *
     * @dev Only accessible to contract owner
     */
    function _setMerkleRoot(uint256 productId, bytes32 merkleRoot) external onlyOwner {
        _drops[productId].merkleRoot = merkleRoot;
    }

    /**
     * Sets tokenURI for artworkId
     *
     * @dev Only accessible to contract owner
     */
    function _setTokenURI(uint256 artworkId, string memory tokenURI_) external onlyOwner {
        _tokenURIs[artworkId] = tokenURI_;
    }
}
