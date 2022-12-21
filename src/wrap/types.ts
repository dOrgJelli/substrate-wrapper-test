// @ts-ignore
import * as Types from "./";

// @ts-ignore
import {
  Client,
  InvokeResult
} from "@polywrap/core-js";

export type UInt = number;
export type UInt8 = number;
export type UInt16 = number;
export type UInt32 = number;
export type Int = number;
export type Int8 = number;
export type Int16 = number;
export type Int32 = number;
export type Bytes = Uint8Array;
export type BigInt = string;
export type BigNumber = string;
export type Json = string;
export type String = string;
export type Boolean = boolean;

/// Imported Objects START ///

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
export interface Substrate_SignedExtrinsicPayload {
  extrinsic: Types.Substrate_SignerProvider_SignerPayloadJSON;
  signature: Types.String;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
export interface Substrate_SignerProvider_SignerPayloadJSON {
  address: Types.String;
  blockHash: Types.String;
  blockNumber: Types.UInt32;
  era: Types.String;
  genesisHash: Types.String;
  method: Types.String;
  nonce: Types.UInt32;
  specVersion: Types.UInt32;
  tip: Types.BigInt;
  transactionVersion: Types.UInt32;
  signedExtensions: Array<Types.String>;
  version: Types.UInt32;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
export interface Substrate_ChainMetadata {
  metadata: Types.Json;
  pallets: Types.Json;
  events: Types.Json;
  errors: Types.Json;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
export interface Substrate_BlockOutput {
  block: Types.Json;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
export interface Substrate_AccountData {
  free: Types.BigNumber;
  reserved: Types.BigNumber;
  misc_frozen: Types.BigNumber;
  fee_frozen: Types.BigNumber;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
export interface Substrate_AccountInfo {
  nonce: Types.UInt32;
  consumers: Types.UInt32;
  providers: Types.UInt32;
  sufficients: Types.UInt32;
  data: Types.Substrate_AccountData;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
export interface Substrate_RuntimeVersion {
  spec_name: Types.String;
  impl_name: Types.String;
  authoring_version: Types.UInt32;
  spec_version: Types.UInt32;
  impl_version: Types.UInt32;
  transaction_version: Types.UInt32;
  state_version: Types.UInt8;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
export interface Substrate_SignerProvider_Account {
  address: Types.String;
  meta: Types.Substrate_SignerProvider_AccountMetadata;
  type?: Types.String | null;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
export interface Substrate_SignerProvider_AccountMetadata {
  genesisHash?: Types.String | null;
  name?: Types.String | null;
  source?: Types.String | null;
}

/// Imported Objects END ///

/// Imported Modules START ///

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_getSignerProviderAccounts {
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_chainGetMetadata {
  url: Types.String;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_blockHash {
  url: Types.String;
  number: Types.UInt32;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_genesisHash {
  url: Types.String;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_chainGetBlock {
  url: Types.String;
  number: Types.UInt32;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_constant {
  url: Types.String;
  pallet: Types.String;
  name: Types.String;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_getRuntimeVersion {
  url: Types.String;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_getStorageValue {
  url: Types.String;
  pallet: Types.String;
  storage: Types.String;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_getStorageMap {
  url: Types.String;
  pallet: Types.String;
  storage: Types.String;
  key: Types.Json;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_getStorageMapPaged {
  url: Types.String;
  pallet: Types.String;
  storage: Types.String;
  count: Types.UInt32;
  nextTo?: Types.Json | null;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_rpcMethods {
  url: Types.String;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_accountInfo {
  url: Types.String;
  account: Types.String;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_getNonceForAccount {
  url: Types.String;
  account: Types.String;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_palletCallIndex {
  url: Types.String;
  pallet: Types.String;
  call: Types.String;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_sign {
  extrinsic: Types.Substrate_SignerProvider_SignerPayloadJSON;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_send {
  url: Types.String;
  signedExtrinsic: Types.Substrate_SignedExtrinsicPayload;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
interface Substrate_Module_Args_signAndSend {
  url: Types.String;
  extrinsic: Types.Substrate_SignerProvider_SignerPayloadJSON;
}

/* URI: "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG" */
export const Substrate_Module = {
  getSignerProviderAccounts: async (
    args: Substrate_Module_Args_getSignerProviderAccounts,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Array<Types.Substrate_SignerProvider_Account>>> => {
    return client.invoke<Array<Types.Substrate_SignerProvider_Account>>({
      uri,
      method: "getSignerProviderAccounts",
      args: args as unknown as Record<string, unknown>
    });
  },

  chainGetMetadata: async (
    args: Substrate_Module_Args_chainGetMetadata,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Types.Substrate_ChainMetadata | null>> => {
    return client.invoke<Types.Substrate_ChainMetadata | null>({
      uri,
      method: "chainGetMetadata",
      args: args as unknown as Record<string, unknown>
    });
  },

  blockHash: async (
    args: Substrate_Module_Args_blockHash,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Types.String | null>> => {
    return client.invoke<Types.String | null>({
      uri,
      method: "blockHash",
      args: args as unknown as Record<string, unknown>
    });
  },

  genesisHash: async (
    args: Substrate_Module_Args_genesisHash,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Types.String | null>> => {
    return client.invoke<Types.String | null>({
      uri,
      method: "genesisHash",
      args: args as unknown as Record<string, unknown>
    });
  },

  chainGetBlock: async (
    args: Substrate_Module_Args_chainGetBlock,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Types.Substrate_BlockOutput | null>> => {
    return client.invoke<Types.Substrate_BlockOutput | null>({
      uri,
      method: "chainGetBlock",
      args: args as unknown as Record<string, unknown>
    });
  },

  constant: async (
    args: Substrate_Module_Args_constant,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Array<Types.UInt8> | null>> => {
    return client.invoke<Array<Types.UInt8> | null>({
      uri,
      method: "constant",
      args: args as unknown as Record<string, unknown>
    });
  },

  getRuntimeVersion: async (
    args: Substrate_Module_Args_getRuntimeVersion,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Types.Substrate_RuntimeVersion | null>> => {
    return client.invoke<Types.Substrate_RuntimeVersion | null>({
      uri,
      method: "getRuntimeVersion",
      args: args as unknown as Record<string, unknown>
    });
  },

  getStorageValue: async (
    args: Substrate_Module_Args_getStorageValue,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Array<Types.UInt8> | null>> => {
    return client.invoke<Array<Types.UInt8> | null>({
      uri,
      method: "getStorageValue",
      args: args as unknown as Record<string, unknown>
    });
  },

  getStorageMap: async (
    args: Substrate_Module_Args_getStorageMap,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Array<Types.UInt8> | null>> => {
    return client.invoke<Array<Types.UInt8> | null>({
      uri,
      method: "getStorageMap",
      args: args as unknown as Record<string, unknown>
    });
  },

  getStorageMapPaged: async (
    args: Substrate_Module_Args_getStorageMapPaged,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Array<Array<Types.UInt8>> | null>> => {
    return client.invoke<Array<Array<Types.UInt8>> | null>({
      uri,
      method: "getStorageMapPaged",
      args: args as unknown as Record<string, unknown>
    });
  },

  rpcMethods: async (
    args: Substrate_Module_Args_rpcMethods,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Array<Types.String> | null>> => {
    return client.invoke<Array<Types.String> | null>({
      uri,
      method: "rpcMethods",
      args: args as unknown as Record<string, unknown>
    });
  },

  accountInfo: async (
    args: Substrate_Module_Args_accountInfo,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Types.Substrate_AccountInfo | null>> => {
    return client.invoke<Types.Substrate_AccountInfo | null>({
      uri,
      method: "accountInfo",
      args: args as unknown as Record<string, unknown>
    });
  },

  getNonceForAccount: async (
    args: Substrate_Module_Args_getNonceForAccount,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Types.UInt32 | null>> => {
    return client.invoke<Types.UInt32 | null>({
      uri,
      method: "getNonceForAccount",
      args: args as unknown as Record<string, unknown>
    });
  },

  palletCallIndex: async (
    args: Substrate_Module_Args_palletCallIndex,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Array<Types.UInt8> | null>> => {
    return client.invoke<Array<Types.UInt8> | null>({
      uri,
      method: "palletCallIndex",
      args: args as unknown as Record<string, unknown>
    });
  },

  sign: async (
    args: Substrate_Module_Args_sign,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Types.Substrate_SignedExtrinsicPayload | null>> => {
    return client.invoke<Types.Substrate_SignedExtrinsicPayload | null>({
      uri,
      method: "sign",
      args: args as unknown as Record<string, unknown>
    });
  },

  send: async (
    args: Substrate_Module_Args_send,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Types.String | null>> => {
    return client.invoke<Types.String | null>({
      uri,
      method: "send",
      args: args as unknown as Record<string, unknown>
    });
  },

  signAndSend: async (
    args: Substrate_Module_Args_signAndSend,
    client: Client,
    uri: string = "ipfs/QmWKnVv1M5pj9C5cuY9EwNB3QPvbUBGKgBSGUDiWkWHEPG"
  ): Promise<InvokeResult<Types.String | null>> => {
    return client.invoke<Types.String | null>({
      uri,
      method: "signAndSend",
      args: args as unknown as Record<string, unknown>
    });
  }
}

/// Imported Modules END ///
