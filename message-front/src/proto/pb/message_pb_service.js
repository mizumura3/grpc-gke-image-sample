// package: message
// file: pb/message.proto

var pb_message_pb = require("../pb/message_pb");
var grpc = require("grpc-web-client").grpc;

var Message = (function () {
  function Message() {}
  Message.serviceName = "message.Message";
  return Message;
}());

Message.PostMessage = {
  methodName: "PostMessage",
  service: Message,
  requestStream: false,
  responseStream: false,
  requestType: pb_message_pb.PostMessageRequest,
  responseType: pb_message_pb.PostMessageResponse
};

Message.Items = {
  methodName: "Items",
  service: Message,
  requestStream: false,
  responseStream: false,
  requestType: pb_message_pb.ItemsRequest,
  responseType: pb_message_pb.ItemsResponse
};

exports.Message = Message;

function MessageClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MessageClient.prototype.postMessage = function postMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Message.PostMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

MessageClient.prototype.items = function items(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Message.Items, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.MessageClient = MessageClient;

