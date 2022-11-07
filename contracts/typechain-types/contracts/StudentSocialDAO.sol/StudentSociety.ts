/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface StudentSocietyInterface extends utils.Interface {
  functions: {
    "register()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "register"): FunctionFragment;

  encodeFunctionData(functionFragment: "register", values?: undefined): string;

  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;

  events: {
    "ProposalInitiated(uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProposalInitiated"): EventFragment;
}

export interface ProposalInitiatedEventObject {
  proposalIndex: number;
}
export type ProposalInitiatedEvent = TypedEvent<
  [number],
  ProposalInitiatedEventObject
>;

export type ProposalInitiatedEventFilter =
  TypedEventFilter<ProposalInitiatedEvent>;

export interface StudentSociety extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StudentSocietyInterface;

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
    register(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  register(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    register(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ProposalInitiated(uint32)"(
      proposalIndex?: null
    ): ProposalInitiatedEventFilter;
    ProposalInitiated(proposalIndex?: null): ProposalInitiatedEventFilter;
  };

  estimateGas: {
    register(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    register(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}