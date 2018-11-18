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

    // firestore 初期化
    const db = firebaseApp.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);

    const uploadTask = firebaseApp
      .storage()
      .ref()
      .child("/images/" + state.uploadFile.input.file.name)
      .put(state.uploadFile.input.file);
    uploadTask.on("state_changed", {
      complete: () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadUrl => {
          console.log(downloadUrl);
          db.collection("images").add({ url: downloadUrl });
        });
      }
    });
  },

  // ファイルを取得する
  items: () => (_, actions) => {},
  setItems: items => () => ({ items })
};
