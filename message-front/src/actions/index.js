import { grpc } from "grpc-web-client";
import model from "../proto/pb/message_pb";
import service from "../proto/pb/message_pb_service";
import { app } from "../../node_modules/hyperapp";

export default {
  // ファイル読み込み
  onChange: e => state => ({
    [e.target.getAttribute("data-input-name")]: {
      input: {
        ...state[e.target.getAttribute("data-input-name")].input,
        [e.target.name]: e.target.files[0]
      }
    }
  }),

  setImages: images => () => {
    console.log("hoge");
  },

  save: e => (state, actions) => {
    // TODO デザインをまともにする
    // TODO css フレームワーク入れる
    const reader = new FileReader();

    // ArrayBuffer のインスタンス作って Unit8Array にしたらいけた
    reader.readAsArrayBuffer(state.uploadFile.input.file);
    reader.onload = e => {
      const postMessageReq = new model.PostMessageRequest();
      const messageModel = new model.MessageModel();

      messageModel.setImage(new Uint8Array(reader.result));
      postMessageReq.setMessage(messageModel);

      grpc.unary(service.Message.PostMessage, {
        request: postMessageReq,
        host: "http://localhost:8080",
        onEnd: res => {
          const { status, statusMessage, headers, message, trailers } = res;
          if (status === grpc.Code.OK && message) {
            console.log(message.toObject());
          }
        }
      });
    };
    actions.items();
  },
  items: () => (_, actions) => {
    const req = new model.ItemsRequest();
    req.setId(1);
    grpc.unary(service.Message.Items, {
      request: req,
      host: "http://localhost:8080",
      onEnd: res => {
        const { status, statusMessage, headers, message, trailers } = res;
        if (status === grpc.Code.OK && message) {
          const items = new Array();
          message.toObject().itemsList.forEach(element => {
            console.log(element);
            const item = "data:image/jpeg;base64," + element.image;
            items.push(item);
          });
          actions.setItems(items);
        }
      }
    });
  },
  setItems: items => () => ({ items })
};
