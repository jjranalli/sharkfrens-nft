/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOperatable, IOperatableInterface } from "../IOperatable";

const _abi = [
  {
    inputs: [],
    name: "operatorStore",
    outputs: [
      {
        internalType: "contract IOperatorStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IOperatable__factory {
  static readonly abi = _abi;
  static createInterface(): IOperatableInterface {
    return new utils.Interface(_abi) as IOperatableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOperatable {
    return new Contract(address, _abi, signerOrProvider) as IOperatable;
  }
}