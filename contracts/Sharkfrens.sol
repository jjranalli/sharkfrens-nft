// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./extensions/Purchasable/SlicerPurchasable.sol";
import "@rari-capital/solmate/src/tokens/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "./structs/Drop.sol";

contract SharkFrens is ERC721, SlicerPurchasable, Ownable {
    /// ============ Errors ============

    // Thrown when an invalid query is made
    error Invalid();
    // Thrown when max supply set is reached
    error MaxSupply();

    /// ============ Storage ============

    // Total number of tokens to be minted in drop 1
    /// @dev drop[1] has 62 NFTs per each artwork
    uint8 private constant DROP1_UNITS = 124;
    // Metadata URI for artwork #1
    string private constant ART1_URI = "";
    // Metadata URI for artwork #2
    string private constant ART2_URI = "";
    // Metadata URI for artwork #3
    string private constant ART3_URI = "";
    // Mapping from product Ids to Drop
    mapping(uint256 => Drop) _drops;

    /// ============ Constructor ============

    constructor(
        string memory name_,
        string memory symbol_,
        address productsModuleAddress_,
        uint256 slicerId_
    ) ERC721(name_, symbol_) SlicerPurchasable(productsModuleAddress_, slicerId_) {
        _drops[2].tokenId = DROP1_UNITS;
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
                // Mint two tokens with consequential ID
                _safeMint(account, tokenId);
                _safeMint(account, tokenId + 1);
                // Update tokenId of drop[1] + 2
                _drops[1].tokenId += 2;
            } else if (productId == 2) {
                // Mint one token with current tokenId of drop[2]
                _safeMint(account, _drops[2].tokenId + 1);
                // Update tokenId of drop[1] + 1
                _drops[2].tokenId++;
            }
        }
    }

    /**
     * @notice Returns URI of tokenId
     */
    function tokenURI(uint256 tokenId) public pure override returns (string memory) {
        // If in drop[2]
        if (tokenId > DROP1_UNITS) {
            return ART3_URI;
        }
        // If in drop[1] and tokenId is even
        else if (tokenId % 2 == 0) {
            return ART2_URI;
        }
        // If in drop[1] and tokenId is odd
        else {
            return ART1_URI;
        }
    }

    /**
     * @notice Returns totalSupply
     *
     * Calculated from current tokenIds of drop[1] and drop[2]
     */
    function totalSupply() external view returns (uint256) {
        return _drops[1].tokenId + _drops[2].tokenId - DROP1_UNITS;
    }

    /**
     * Sets merkleRoot for productId
     *
     * @dev Only accessible to contract owner
     */
    function _setMerkleRoot(uint256 productId, bytes32 merkleRoot) external onlyOwner {
        _drops[productId].merkleRoot = merkleRoot;
    }
}
