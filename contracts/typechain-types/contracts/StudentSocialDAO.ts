/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
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
} from "../common";

export interface StudentSocialDAOInterface extends utils.Interface {
  functions: {
    "INITIAL_POINTS()": FunctionFragment;
    "PROPOSAL_COST()": FunctionFragment;
    "PROPOSAL_REWARD()": FunctionFragment;
    "VOTE_COST()": FunctionFragment;
    "abortProposal(uint32)": FunctionFragment;
    "getNow()": FunctionFragment;
    "getProposalContent(uint32)": FunctionFragment;
    "getProposalDuration(uint32)": FunctionFragment;
    "getProposalEndTime(uint32)": FunctionFragment;
    "getProposalName(uint32)": FunctionFragment;
    "getProposalOppose(uint32)": FunctionFragment;
    "getProposalStartTime(uint32)": FunctionFragment;
    "getProposalState(uint32)": FunctionFragment;
    "getProposalSupport(uint32)": FunctionFragment;
    "getProposalTitle(uint32)": FunctionFragment;
    "getUserPass(address)": FunctionFragment;
    "getUserProposals(address)": FunctionFragment;
    "initiateProposal(string,string,uint256,string)": FunctionFragment;
    "isProposalOverdue(uint32)": FunctionFragment;
    "isSupportGreaterOpposse(uint32)": FunctionFragment;
    "opposeProposal(uint32,uint32)": FunctionFragment;
    "passProposal(uint32)": FunctionFragment;
    "proposals(uint32)": FunctionFragment;
    "studentERC20()": FunctionFragment;
    "studentERC721()": FunctionFragment;
    "supportProposal(uint32,uint32)": FunctionFragment;
    "totalProposals()": FunctionFragment;
    "userPass(address)": FunctionFragment;
    "userProposals(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "INITIAL_POINTS"
      | "PROPOSAL_COST"
      | "PROPOSAL_REWARD"
      | "VOTE_COST"
      | "abortProposal"
      | "getNow"
      | "getProposalContent"
      | "getProposalDuration"
      | "getProposalEndTime"
      | "getProposalName"
      | "getProposalOppose"
      | "getProposalStartTime"
      | "getProposalState"
      | "getProposalSupport"
      | "getProposalTitle"
      | "getUserPass"
      | "getUserProposals"
      | "initiateProposal"
      | "isProposalOverdue"
      | "isSupportGreaterOpposse"
      | "opposeProposal"
      | "passProposal"
      | "proposals"
      | "studentERC20"
      | "studentERC721"
      | "supportProposal"
      | "totalProposals"
      | "userPass"
      | "userProposals"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "INITIAL_POINTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROPOSAL_COST",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROPOSAL_REWARD",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VOTE_COST", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "abortProposal",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getNow", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getProposalContent",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalDuration",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalEndTime",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalName",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalOppose",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalStartTime",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalState",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalSupport",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalTitle",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserPass",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserProposals",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateProposal",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isProposalOverdue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isSupportGreaterOpposse",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "opposeProposal",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "passProposal",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "studentERC20",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "studentERC721",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportProposal",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalProposals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userPass",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "userProposals",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "INITIAL_POINTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROPOSAL_COST",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROPOSAL_REWARD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VOTE_COST", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "abortProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProposalContent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalOppose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalSupport",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalTitle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserPass",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initiateProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isProposalOverdue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSupportGreaterOpposse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "opposeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "passProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "studentERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "studentERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userPass", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userProposals",
    data: BytesLike
  ): Result;

  events: {
    "ProposalInitiated(uint32)": EventFragment;
    "ProposalOpposed(uint32,uint32)": EventFragment;
    "ProposalSupported(uint32,uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProposalInitiated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalOpposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalSupported"): EventFragment;
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

export interface ProposalOpposedEventObject {
  proposalIndex: number;
  amount: number;
}
export type ProposalOpposedEvent = TypedEvent<
  [number, number],
  ProposalOpposedEventObject
>;

export type ProposalOpposedEventFilter = TypedEventFilter<ProposalOpposedEvent>;

export interface ProposalSupportedEventObject {
  proposalIndex: number;
  amount: number;
}
export type ProposalSupportedEvent = TypedEvent<
  [number, number],
  ProposalSupportedEventObject
>;

export type ProposalSupportedEventFilter =
  TypedEventFilter<ProposalSupportedEvent>;

export interface StudentSocialDAO extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StudentSocialDAOInterface;

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
    INITIAL_POINTS(overrides?: CallOverrides): Promise<[number]>;

    PROPOSAL_COST(overrides?: CallOverrides): Promise<[number]>;

    PROPOSAL_REWARD(overrides?: CallOverrides): Promise<[number]>;

    VOTE_COST(overrides?: CallOverrides): Promise<[number]>;

    abortProposal(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getNow(overrides?: CallOverrides): Promise<[BigNumber]>;

    getProposalContent(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getProposalDuration(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProposalEndTime(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProposalName(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getProposalOppose(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getProposalStartTime(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProposalState(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getProposalSupport(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getProposalTitle(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getUserPass(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getUserProposals(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    initiateProposal(
      _name: PromiseOrValue<string>,
      _title: PromiseOrValue<string>,
      _duration: PromiseOrValue<BigNumberish>,
      _content: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isProposalOverdue(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSupportGreaterOpposse(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    opposeProposal(
      index: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    passProposal(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        number,
        number,
        number
      ] & {
        index: number;
        proposer: string;
        name: string;
        title: string;
        startTime: BigNumber;
        duration: BigNumber;
        content: string;
        support: number;
        oppose: number;
        state: number;
      }
    >;

    studentERC20(overrides?: CallOverrides): Promise<[string]>;

    studentERC721(overrides?: CallOverrides): Promise<[string]>;

    supportProposal(
      index: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalProposals(overrides?: CallOverrides): Promise<[number]>;

    userPass(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    userProposals(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;
  };

  INITIAL_POINTS(overrides?: CallOverrides): Promise<number>;

  PROPOSAL_COST(overrides?: CallOverrides): Promise<number>;

  PROPOSAL_REWARD(overrides?: CallOverrides): Promise<number>;

  VOTE_COST(overrides?: CallOverrides): Promise<number>;

  abortProposal(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getNow(overrides?: CallOverrides): Promise<BigNumber>;

  getProposalContent(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getProposalDuration(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProposalEndTime(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProposalName(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getProposalOppose(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getProposalStartTime(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProposalState(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getProposalSupport(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getProposalTitle(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getUserPass(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  getUserProposals(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  initiateProposal(
    _name: PromiseOrValue<string>,
    _title: PromiseOrValue<string>,
    _duration: PromiseOrValue<BigNumberish>,
    _content: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isProposalOverdue(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSupportGreaterOpposse(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  opposeProposal(
    index: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  passProposal(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposals(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      string,
      number,
      number,
      number
    ] & {
      index: number;
      proposer: string;
      name: string;
      title: string;
      startTime: BigNumber;
      duration: BigNumber;
      content: string;
      support: number;
      oppose: number;
      state: number;
    }
  >;

  studentERC20(overrides?: CallOverrides): Promise<string>;

  studentERC721(overrides?: CallOverrides): Promise<string>;

  supportProposal(
    index: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalProposals(overrides?: CallOverrides): Promise<number>;

  userPass(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  userProposals(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    INITIAL_POINTS(overrides?: CallOverrides): Promise<number>;

    PROPOSAL_COST(overrides?: CallOverrides): Promise<number>;

    PROPOSAL_REWARD(overrides?: CallOverrides): Promise<number>;

    VOTE_COST(overrides?: CallOverrides): Promise<number>;

    abortProposal(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getNow(overrides?: CallOverrides): Promise<BigNumber>;

    getProposalContent(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getProposalDuration(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalEndTime(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalName(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getProposalOppose(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getProposalStartTime(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalState(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getProposalSupport(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getProposalTitle(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getUserPass(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    getUserProposals(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    initiateProposal(
      _name: PromiseOrValue<string>,
      _title: PromiseOrValue<string>,
      _duration: PromiseOrValue<BigNumberish>,
      _content: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isProposalOverdue(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSupportGreaterOpposse(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    opposeProposal(
      index: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    passProposal(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        number,
        number,
        number
      ] & {
        index: number;
        proposer: string;
        name: string;
        title: string;
        startTime: BigNumber;
        duration: BigNumber;
        content: string;
        support: number;
        oppose: number;
        state: number;
      }
    >;

    studentERC20(overrides?: CallOverrides): Promise<string>;

    studentERC721(overrides?: CallOverrides): Promise<string>;

    supportProposal(
      index: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalProposals(overrides?: CallOverrides): Promise<number>;

    userPass(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    userProposals(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {
    "ProposalInitiated(uint32)"(
      proposalIndex?: null
    ): ProposalInitiatedEventFilter;
    ProposalInitiated(proposalIndex?: null): ProposalInitiatedEventFilter;

    "ProposalOpposed(uint32,uint32)"(
      proposalIndex?: null,
      amount?: null
    ): ProposalOpposedEventFilter;
    ProposalOpposed(
      proposalIndex?: null,
      amount?: null
    ): ProposalOpposedEventFilter;

    "ProposalSupported(uint32,uint32)"(
      proposalIndex?: null,
      amount?: null
    ): ProposalSupportedEventFilter;
    ProposalSupported(
      proposalIndex?: null,
      amount?: null
    ): ProposalSupportedEventFilter;
  };

  estimateGas: {
    INITIAL_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

    PROPOSAL_COST(overrides?: CallOverrides): Promise<BigNumber>;

    PROPOSAL_REWARD(overrides?: CallOverrides): Promise<BigNumber>;

    VOTE_COST(overrides?: CallOverrides): Promise<BigNumber>;

    abortProposal(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getNow(overrides?: CallOverrides): Promise<BigNumber>;

    getProposalContent(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalDuration(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalEndTime(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalName(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalOppose(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalStartTime(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalState(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalSupport(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalTitle(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserPass(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserProposals(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initiateProposal(
      _name: PromiseOrValue<string>,
      _title: PromiseOrValue<string>,
      _duration: PromiseOrValue<BigNumberish>,
      _content: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isProposalOverdue(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSupportGreaterOpposse(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    opposeProposal(
      index: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    passProposal(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    studentERC20(overrides?: CallOverrides): Promise<BigNumber>;

    studentERC721(overrides?: CallOverrides): Promise<BigNumber>;

    supportProposal(
      index: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalProposals(overrides?: CallOverrides): Promise<BigNumber>;

    userPass(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userProposals(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INITIAL_POINTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PROPOSAL_COST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PROPOSAL_REWARD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VOTE_COST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    abortProposal(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getNow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProposalContent(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalDuration(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalEndTime(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalName(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalOppose(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalStartTime(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalState(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalSupport(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalTitle(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserPass(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserProposals(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initiateProposal(
      _name: PromiseOrValue<string>,
      _title: PromiseOrValue<string>,
      _duration: PromiseOrValue<BigNumberish>,
      _content: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isProposalOverdue(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSupportGreaterOpposse(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    opposeProposal(
      index: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    passProposal(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    studentERC20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    studentERC721(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportProposal(
      index: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalProposals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userPass(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userProposals(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
