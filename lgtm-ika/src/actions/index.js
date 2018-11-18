import { firebaseApp } from "../firebase/";
import { firestoreApp } from "../firebase";

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
          firestoreApp.collection("images").add({ url: downloadUrl });
        });
      }
    });
  },

  // ファイルを取得する
  items: () => (_, actions) => {},
  setItems: items => () => ({ items })
};
