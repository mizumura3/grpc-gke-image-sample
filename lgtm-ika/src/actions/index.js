import { grpc } from "grpc-web-client";
import model from "../proto/pb/message_pb";
import service from "../proto/pb/message_pb_service";
import { firebaseApp } from "../firebase/";

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

  // ファイルをアップロードする
  save: () => state => {
    // console.log("hogehoge");
    // console.log(state.uploadFile.input.file.name);
    // console.log(state);
    const uploadTask = firebaseApp
      .storage()
      .ref()
      .child("/images/" + state.uploadFile.input.file.name)
      .put(state.uploadFile.input.file);
    uploadTask.on("state_changed", {
      complete: () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadUrl => {
          console.log(downloadUrl);
        });
      }
    });
  },

  // ファイルを取得する
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
