/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SharkFrens, SharkFrensInterface } from "../SharkFrens";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "productsModuleAddress_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "slicerId_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Invalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxSupply",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "NotPurchase",
    type: "error",
  },
  {
    inputs: [],
    name: "NotSuccessful",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongSlicer",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    name: "_setMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "buyerCustomData",
        type: "bytes",
      },
    ],
    name: "isPurchaseAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "isAllowed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slicerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "slicerCustomData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "buyerCustomData",
        type: "bytes",
      },
    ],
    name: "onProductPurchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001a4738038062001a478339810160408190526200003491620002a7565b8181858581600090805190602001906200005092919062000134565b5080516200006690600190602084019062000134565b5050600680546001600160a01b0319166001600160a01b039490941693909317909255608052506200009f620000993390565b620000e2565b50506002600052505060086020527f6add646517a5b0f6793cd5891b7937d28a5b2981a5d88ebc7cd776088fea9041805463ffffffff1916607c17905562000376565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b82805462000142906200033a565b90600052602060002090601f016020900481019282620001665760008555620001b1565b82601f106200018157805160ff1916838001178555620001b1565b82800160010185558215620001b1579182015b82811115620001b157825182559160200191906001019062000194565b50620001bf929150620001c3565b5090565b5b80821115620001bf5760008155600101620001c4565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200020257600080fd5b81516001600160401b03808211156200021f576200021f620001da565b604051601f8301601f19908116603f011681019082821181831017156200024a576200024a620001da565b816040528381526020925086838588010111156200026757600080fd5b600091505b838210156200028b57858201830151818301840152908201906200026c565b838211156200029d5760008385830101525b9695505050505050565b60008060008060808587031215620002be57600080fd5b84516001600160401b0380821115620002d657600080fd5b620002e488838901620001f0565b95506020870151915080821115620002fb57600080fd5b506200030a87828801620001f0565b604087015190945090506001600160a01b03811681146200032a57600080fd5b6060959095015193969295505050565b600181811c908216806200034f57607f821691505b6020821081036200037057634e487b7160e01b600052602260045260246000fd5b50919050565b6080516116b5620003926000396000610df001526116b56000f3fe60806040526004361061011f5760003560e01c80638da5cb5b116100a0578063b88d4fde11610064578063b88d4fde1461034c578063c87b56dd1461036c578063e985e9c51461038c578063ea0875ea146103c7578063f2fde38b146103e757600080fd5b80638da5cb5b146102c657806395d89b41146102e457806395db9368146102f9578063a22cb46514610319578063a23fffb91461033957600080fd5b806323b872dd116100e757806323b872dd1461020e57806342842e0e1461022e5780636352211e1461024e57806370a0823114610284578063715018a6146102b157600080fd5b806301ffc9a71461012457806306fdde0314610159578063081812fc1461017b578063095ea7b3146101c957806318160ddd146101eb575b600080fd5b34801561013057600080fd5b5061014461013f3660046110bd565b610407565b60405190151581526020015b60405180910390f35b34801561016557600080fd5b5061016e610459565b604051610150919061112e565b34801561018757600080fd5b506101b1610196366004611141565b6004602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610150565b3480156101d557600080fd5b506101e96101e4366004611171565b6104e7565b005b3480156101f757600080fd5b506102006105ce565b604051908152602001610150565b34801561021a57600080fd5b506101e961022936600461119b565b61064b565b34801561023a57600080fd5b506101e961024936600461119b565b610812565b34801561025a57600080fd5b506101b1610269366004611141565b6003602052600090815260409020546001600160a01b031681565b34801561029057600080fd5b5061020061029f3660046111d7565b60026020526000908152604090205481565b3480156102bd57600080fd5b506101e96108e7565b3480156102d257600080fd5b506007546001600160a01b03166101b1565b3480156102f057600080fd5b5061016e61091d565b34801561030557600080fd5b506101446103143660046112a9565b61092a565b34801561032557600080fd5b506101e9610334366004611339565b6109ac565b6101e96103473660046112a9565b610a18565b34801561035857600080fd5b506101e9610367366004611375565b610b8b565b34801561037857600080fd5b5061016e610387366004611141565b610c4d565b34801561039857600080fd5b506101446103a73660046113dd565b600560209081526000928352604080842090915290825290205460ff1681565b3480156103d357600080fd5b506101e96103e2366004611410565b610cab565b3480156103f357600080fd5b506101e96104023660046111d7565b610cea565b60006301ffc9a760e01b6001600160e01b03198316148061043857506380ac58cd60e01b6001600160e01b03198316145b806104535750635b5e139f60e01b6001600160e01b03198316145b92915050565b6000805461046690611432565b80601f016020809104026020016040519081016040528092919081815260200182805461049290611432565b80156104df5780601f106104b4576101008083540402835291602001916104df565b820191906000526020600020905b8154815290600101906020018083116104c257829003601f168201915b505050505081565b6000818152600360205260409020546001600160a01b03163381148061053057506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b6105725760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064015b60405180910390fd5b60008281526004602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60086020527f6add646517a5b0f6793cd5891b7937d28a5b2981a5d88ebc7cd776088fea904154600160009081527fad67d757c34507f157cacfa2e3153e9f260a2244f30428821be7be64587ac55f549091607c916106369163ffffffff9081169116611482565b61064091906114aa565b63ffffffff16905090565b6000818152600360205260409020546001600160a01b038481169116146106a15760405162461bcd60e51b815260206004820152600a60248201526957524f4e475f46524f4d60b01b6044820152606401610569565b6001600160a01b0382166106eb5760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b6044820152606401610569565b336001600160a01b038416148061071857506000818152600460205260409020546001600160a01b031633145b8061074657506001600160a01b038316600090815260056020908152604080832033845290915290205460ff165b6107835760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b6044820152606401610569565b6001600160a01b0380841660008181526002602090815260408083208054600019019055938616808352848320805460010190558583526003825284832080546001600160a01b03199081168317909155600490925284832080549092169091559251849392917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61081d83838361064b565b6001600160a01b0382163b15806108c65750604051630a85bd0160e11b8082523360048301526001600160a01b03858116602484015260448301849052608060648401526000608484015290919084169063150b7a029060a4016020604051808303816000875af1158015610896573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ba91906114cf565b6001600160e01b031916145b6108e25760405162461bcd60e51b8152600401610569906114ec565b505050565b6007546001600160a01b031633146109115760405162461bcd60e51b815260040161056990611516565b61091b6000610d85565b565b6001805461046690611432565b60008082806020019051810190610941919061154b565b6040516bffffffffffffffffffffffff19606089901b16602082015290915060009060340160405160208183030381529060405280519060200120905061099f82600860008b81526020019081526020016000206001015483610dd7565b9998505050505050505050565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b85610a2281610ded565b610a3087878787878761092a565b610a4d57604051631eb49d6d60e11b815260040160405180910390fd5b85600103610af1576001600081905260086020527fad67d757c34507f157cacfa2e3153e9f260a2244f30428821be7be64587ac55f5463ffffffff90811690910116610a998682610e58565b610aa68682600101610e58565b50600160005260086020527fad67d757c34507f157cacfa2e3153e9f260a2244f30428821be7be64587ac55f805463ffffffff8082166002011663ffffffff19909116179055610b82565b85600203610b8257600260005260086020527f6add646517a5b0f6793cd5891b7937d28a5b2981a5d88ebc7cd776088fea904154610b3c90869063ffffffff90811660010116610e58565b600260005260086020527f6add646517a5b0f6793cd5891b7937d28a5b2981a5d88ebc7cd776088fea9041805463ffffffff8082166001011663ffffffff199091161790555b50505050505050565b610b9684848461064b565b6001600160a01b0383163b1580610c2b5750604051630a85bd0160e11b808252906001600160a01b0385169063150b7a0290610bdc9033908990889088906004016115f1565b6020604051808303816000875af1158015610bfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1f91906114cf565b6001600160e01b031916145b610c475760405162461bcd60e51b8152600401610569906114ec565b50505050565b6060607c821115610c6c57505060408051602081019091526000815290565b610c7760028361162e565b600003610c9257505060408051602081019091526000815290565b505060408051602081019091526000815290565b919050565b6007546001600160a01b03163314610cd55760405162461bcd60e51b815260040161056990611516565b60009182526008602052604090912060010155565b6007546001600160a01b03163314610d145760405162461bcd60e51b815260040161056990611516565b6001600160a01b038116610d795760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610569565b610d8281610d85565b50565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600082610de48584610f28565b14949350505050565b807f000000000000000000000000000000000000000000000000000000000000000014610e2d57604051632eafdb6960e01b815260040160405180910390fd5b6006546001600160a01b03163314610d82576040516347322d0360e01b815260040160405180910390fd5b610e628282610f9c565b6001600160a01b0382163b1580610f085750604051630a85bd0160e11b80825233600483015260006024830181905260448301849052608060648401526084830152906001600160a01b0384169063150b7a029060a4016020604051808303816000875af1158015610ed8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efc91906114cf565b6001600160e01b031916145b610f245760405162461bcd60e51b8152600401610569906114ec565b5050565b600081815b8451811015610f94576000858281518110610f4a57610f4a611650565b60200260200101519050808311610f705760008381526020829052604090209250610f81565b600081815260208490526040902092505b5080610f8c81611666565b915050610f2d565b509392505050565b6001600160a01b038216610fe65760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b6044820152606401610569565b6000818152600360205260409020546001600160a01b03161561103c5760405162461bcd60e51b815260206004820152600e60248201526d1053149150511657d3525395115160921b6044820152606401610569565b6001600160a01b038216600081815260026020908152604080832080546001019055848352600390915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b031981168114610d8257600080fd5b6000602082840312156110cf57600080fd5b81356110da816110a7565b9392505050565b6000815180845260005b81811015611107576020818501810151868301820152016110eb565b81811115611119576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006110da60208301846110e1565b60006020828403121561115357600080fd5b5035919050565b80356001600160a01b0381168114610ca657600080fd5b6000806040838503121561118457600080fd5b61118d8361115a565b946020939093013593505050565b6000806000606084860312156111b057600080fd5b6111b98461115a565b92506111c76020850161115a565b9150604084013590509250925092565b6000602082840312156111e957600080fd5b6110da8261115a565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611231576112316111f2565b604052919050565b600082601f83011261124a57600080fd5b813567ffffffffffffffff811115611264576112646111f2565b611277601f8201601f1916602001611208565b81815284602083860101111561128c57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060008060c087890312156112c257600080fd5b86359550602087013594506112d96040880161115a565b935060608701359250608087013567ffffffffffffffff808211156112fd57600080fd5b6113098a838b01611239565b935060a089013591508082111561131f57600080fd5b5061132c89828a01611239565b9150509295509295509295565b6000806040838503121561134c57600080fd5b6113558361115a565b91506020830135801515811461136a57600080fd5b809150509250929050565b6000806000806080858703121561138b57600080fd5b6113948561115a565b93506113a26020860161115a565b925060408501359150606085013567ffffffffffffffff8111156113c557600080fd5b6113d187828801611239565b91505092959194509250565b600080604083850312156113f057600080fd5b6113f98361115a565b91506114076020840161115a565b90509250929050565b6000806040838503121561142357600080fd5b50508035926020909101359150565b600181811c9082168061144657607f821691505b60208210810361146657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff8083168185168083038211156114a1576114a161146c565b01949350505050565b600063ffffffff838116908316818110156114c7576114c761146c565b039392505050565b6000602082840312156114e157600080fd5b81516110da816110a7565b60208082526010908201526f155394d0519157d49150d2541251539560821b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000602080838503121561155e57600080fd5b825167ffffffffffffffff8082111561157657600080fd5b818501915085601f83011261158a57600080fd5b81518181111561159c5761159c6111f2565b8060051b91506115ad848301611208565b81815291830184019184810190888411156115c757600080fd5b938501935b838510156115e5578451825293850193908501906115cc565b98975050505050505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611624908301846110e1565b9695505050505050565b60008261164b57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052603260045260246000fd5b6000600182016116785761167861146c565b506001019056fea2646970667358221220fb9ed5d2b68dfcc7c131240d5d022321c39720f5b0a7e84c5d378b81b4d97eef64736f6c634300080d0033";

type SharkFrensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SharkFrensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SharkFrens__factory extends ContractFactory {
  constructor(...args: SharkFrensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SharkFrens";
  }

  deploy(
    name_: string,
    symbol_: string,
    productsModuleAddress_: string,
    slicerId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SharkFrens> {
    return super.deploy(
      name_,
      symbol_,
      productsModuleAddress_,
      slicerId_,
      overrides || {}
    ) as Promise<SharkFrens>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    productsModuleAddress_: string,
    slicerId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      productsModuleAddress_,
      slicerId_,
      overrides || {}
    );
  }
  attach(address: string): SharkFrens {
    return super.attach(address) as SharkFrens;
  }
  connect(signer: Signer): SharkFrens__factory {
    return super.connect(signer) as SharkFrens__factory;
  }
  static readonly contractName: "SharkFrens";
  public readonly contractName: "SharkFrens";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SharkFrensInterface {
    return new utils.Interface(_abi) as SharkFrensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SharkFrens {
    return new Contract(address, _abi, signerOrProvider) as SharkFrens;
  }
}
