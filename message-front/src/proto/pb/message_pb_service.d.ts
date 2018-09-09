// package: message
// file: pb/message.proto

import * as pb_message_pb from "../pb/message_pb";
import {grpc} from "grpc-web-client";

type MessagePostMessage = {
  readonly methodName: string;
  readonly service: typeof Message;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_message_pb.PostMessageRequest;
  readonly responseType: typeof pb_message_pb.PostMessageResponse;
};

type MessageItems = {
  readonly methodName: string;
  readonly service: typeof Message;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_message_pb.ItemsRequest;
  readonly responseType: typeof pb_message_pb.ItemsResponse;
};

export class Message {
  static readonly serviceName: string;
  static readonly PostMessage: MessagePostMessage;
  static readonly Items: MessageItems;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class MessageClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  postMessage(
    requestMessage: pb_message_pb.PostMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: pb_message_pb.PostMessageResponse|null) => void
  ): void;
  postMessage(
    requestMessage: pb_message_pb.PostMessageRequest,
    callback: (error: ServiceError, responseMessage: pb_message_pb.PostMessageResponse|null) => void
  ): void;
  items(
    requestMessage: pb_message_pb.ItemsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: pb_message_pb.ItemsResponse|null) => void
  ): void;
  items(
    requestMessage: pb_message_pb.ItemsRequest,
    callback: (error: ServiceError, responseMessage: pb_message_pb.ItemsResponse|null) => void
  ): void;
}

