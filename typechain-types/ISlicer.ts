/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ISlicerInterface extends utils.Interface {
  contractName: "ISlicer";
  functions: {
    "_addCurrencies(address[])": FunctionFragment;
    "_handle1155Purchase(address,address,uint256,uint256)": FunctionFragment;
    "_handle721Purchase(address,address,uint256)": FunctionFragment;
    "_releaseFromFundsModule(address,address)": FunctionFragment;
    "_releaseFromSliceCore(address,address,uint256)": FunctionFragment;
    "_setChildSlicer(uint256,bool)": FunctionFragment;
    "_setCustomFee(bool,uint256)": FunctionFragment;
    "_setTotalShares(uint256)": FunctionFragment;
    "_updatePayees(address,address,bool,uint256,uint256)": FunctionFragment;
    "_updatePayeesReslice(address[],int32[],uint32)": FunctionFragment;
    "acceptsCurrency(address)": FunctionFragment;
    "batchReleaseAccounts(address[],address,bool)": FunctionFragment;
    "getFee()": FunctionFragment;
    "isPayeeAllowed(address)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "release(address,address,bool)": FunctionFragment;
    "slicerInfo()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "unreleased(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_addCurrencies",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "_handle1155Purchase",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_handle721Purchase",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_releaseFromFundsModule",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "_releaseFromSliceCore",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_setChildSlicer",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "_setCustomFee",
    values: [boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_setTotalShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_updatePayees",
    values: [string, string, boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_updatePayeesReslice",
    values: [string[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "acceptsCurrency",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "batchReleaseAccounts",
    values: [string[], string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "getFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isPayeeAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "slicerInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unreleased",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "_addCurrencies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_handle1155Purchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_handle721Purchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_releaseFromFundsModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_releaseFromSliceCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_setChildSlicer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_setCustomFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_setTotalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_updatePayees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_updatePayeesReslice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptsCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchReleaseAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPayeeAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "slicerInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unreleased", data: BytesLike): Result;

  events: {};
}

export interface ISlicer extends BaseContract {
  contractName: "ISlicer";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISlicerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _addCurrencies(
      currencies: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _handle1155Purchase(
      buyer: string,
      contractAddress: string,
      quantity: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _handle721Purchase(
      buyer: string,
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _releaseFromFundsModule(
      account: string,
      currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _releaseFromSliceCore(
      account: string,
      currency: string,
      accountSlices: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _setChildSlicer(
      id: BigNumberish,
      addChildSlicerMode: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _setCustomFee(
      customFeeActive: boolean,
      customFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _setTotalShares(
      totalShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _updatePayees(
      sender: string,
      receiver: string,
      toRelease: boolean,
      senderShares: BigNumberish,
      transferredShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _updatePayeesReslice(
      accounts: string[],
      tokensDiffs: BigNumberish[],
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    acceptsCurrency(
      currency: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    batchReleaseAccounts(
      accounts: string[],
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFee(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fee: BigNumber }>;

    isPayeeAllowed(
      payee: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    release(
      account: string,
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    slicerInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, boolean, boolean, string[]] & {
        tokenId: BigNumber;
        minimumShares: BigNumber;
        creator: string;
        isImmutable: boolean;
        isControlled: boolean;
        currencies: string[];
      }
    >;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    unreleased(
      account: string,
      currency: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { unreleasedAmount: BigNumber }>;
  };

  _addCurrencies(
    currencies: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _handle1155Purchase(
    buyer: string,
    contractAddress: string,
    quantity: BigNumberish,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _handle721Purchase(
    buyer: string,
    contractAddress: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _releaseFromFundsModule(
    account: string,
    currency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _releaseFromSliceCore(
    account: string,
    currency: string,
    accountSlices: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _setChildSlicer(
    id: BigNumberish,
    addChildSlicerMode: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _setCustomFee(
    customFeeActive: boolean,
    customFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _setTotalShares(
    totalShares: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _updatePayees(
    sender: string,
    receiver: string,
    toRelease: boolean,
    senderShares: BigNumberish,
    transferredShares: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _updatePayeesReslice(
    accounts: string[],
    tokensDiffs: BigNumberish[],
    totalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  acceptsCurrency(
    currency: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  batchReleaseAccounts(
    accounts: string[],
    currency: string,
    withdraw: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFee(overrides?: CallOverrides): Promise<BigNumber>;

  isPayeeAllowed(payee: string, overrides?: CallOverrides): Promise<boolean>;

  onERC1155BatchReceived(
    operator: string,
    from: string,
    ids: BigNumberish[],
    values: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    operator: string,
    from: string,
    id: BigNumberish,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  release(
    account: string,
    currency: string,
    withdraw: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  slicerInfo(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, boolean, boolean, string[]] & {
      tokenId: BigNumber;
      minimumShares: BigNumber;
      creator: string;
      isImmutable: boolean;
      isControlled: boolean;
      currencies: string[];
    }
  >;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  unreleased(
    account: string,
    currency: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    _addCurrencies(
      currencies: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    _handle1155Purchase(
      buyer: string,
      contractAddress: string,
      quantity: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _handle721Purchase(
      buyer: string,
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _releaseFromFundsModule(
      account: string,
      currency: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; protocolPayment: BigNumber }
    >;

    _releaseFromSliceCore(
      account: string,
      currency: string,
      accountSlices: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _setChildSlicer(
      id: BigNumberish,
      addChildSlicerMode: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    _setCustomFee(
      customFeeActive: boolean,
      customFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _setTotalShares(
      totalShares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _updatePayees(
      sender: string,
      receiver: string,
      toRelease: boolean,
      senderShares: BigNumberish,
      transferredShares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _updatePayeesReslice(
      accounts: string[],
      tokensDiffs: BigNumberish[],
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    acceptsCurrency(
      currency: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    batchReleaseAccounts(
      accounts: string[],
      currency: string,
      withdraw: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    getFee(overrides?: CallOverrides): Promise<BigNumber>;

    isPayeeAllowed(payee: string, overrides?: CallOverrides): Promise<boolean>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    release(
      account: string,
      currency: string,
      withdraw: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    slicerInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, boolean, boolean, string[]] & {
        tokenId: BigNumber;
        minimumShares: BigNumber;
        creator: string;
        isImmutable: boolean;
        isControlled: boolean;
        currencies: string[];
      }
    >;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unreleased(
      account: string,
      currency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    _addCurrencies(
      currencies: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _handle1155Purchase(
      buyer: string,
      contractAddress: string,
      quantity: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _handle721Purchase(
      buyer: string,
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _releaseFromFundsModule(
      account: string,
      currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _releaseFromSliceCore(
      account: string,
      currency: string,
      accountSlices: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _setChildSlicer(
      id: BigNumberish,
      addChildSlicerMode: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _setCustomFee(
      customFeeActive: boolean,
      customFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _setTotalShares(
      totalShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _updatePayees(
      sender: string,
      receiver: string,
      toRelease: boolean,
      senderShares: BigNumberish,
      transferredShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _updatePayeesReslice(
      accounts: string[],
      tokensDiffs: BigNumberish[],
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    acceptsCurrency(
      currency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    batchReleaseAccounts(
      accounts: string[],
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFee(overrides?: CallOverrides): Promise<BigNumber>;

    isPayeeAllowed(
      payee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    release(
      account: string,
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    slicerInfo(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unreleased(
      account: string,
      currency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _addCurrencies(
      currencies: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _handle1155Purchase(
      buyer: string,
      contractAddress: string,
      quantity: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _handle721Purchase(
      buyer: string,
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _releaseFromFundsModule(
      account: string,
      currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _releaseFromSliceCore(
      account: string,
      currency: string,
      accountSlices: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _setChildSlicer(
      id: BigNumberish,
      addChildSlicerMode: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _setCustomFee(
      customFeeActive: boolean,
      customFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _setTotalShares(
      totalShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _updatePayees(
      sender: string,
      receiver: string,
      toRelease: boolean,
      senderShares: BigNumberish,
      transferredShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _updatePayeesReslice(
      accounts: string[],
      tokensDiffs: BigNumberish[],
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    acceptsCurrency(
      currency: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    batchReleaseAccounts(
      accounts: string[],
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPayeeAllowed(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    release(
      account: string,
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    slicerInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unreleased(
      account: string,
      currency: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}