// package: message
// file: pb/message.proto

import * as jspb from "google-protobuf";

export class MessageModel extends jspb.Message {
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageModel.AsObject;
  static toObject(includeInstance: boolean, msg: MessageModel): MessageModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageModel;
  static deserializeBinaryFromReader(message: MessageModel, reader: jspb.BinaryReader): MessageModel;
}

export namespace MessageModel {
  export type AsObject = {
    image: Uint8Array | string,
    name: string,
  }
}

export class PostMessageRequest extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): MessageModel | undefined;
  setMessage(value?: MessageModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostMessageRequest): PostMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMessageRequest;
  static deserializeBinaryFromReader(message: PostMessageRequest, reader: jspb.BinaryReader): PostMessageRequest;
}

export namespace PostMessageRequest {
  export type AsObject = {
    message?: MessageModel.AsObject,
  }
}

export class PostMessageResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostMessageResponse): PostMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMessageResponse;
  static deserializeBinaryFromReader(message: PostMessageResponse, reader: jspb.BinaryReader): PostMessageResponse;
}

export namespace PostMessageResponse {
  export type AsObject = {
    id: number,
    image: Uint8Array | string,
  }
}

export class ItemsResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Item>;
  setItemsList(value: Array<Item>): void;
  addItems(value?: Item, index?: number): Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ItemsResponse): ItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemsResponse;
  static deserializeBinaryFromReader(message: ItemsResponse, reader: jspb.BinaryReader): ItemsResponse;
}

export namespace ItemsResponse {
  export type AsObject = {
    itemsList: Array<Item.AsObject>,
  }
}

export class ItemsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ItemsRequest): ItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemsRequest;
  static deserializeBinaryFromReader(message: ItemsRequest, reader: jspb.BinaryReader): ItemsRequest;
}

export namespace ItemsRequest {
  export type AsObject = {
    id: number,
  }
}

export class Item extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    id: number,
    image: Uint8Array | string,
  }
}

