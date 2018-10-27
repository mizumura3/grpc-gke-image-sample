import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <main>
    <div class="container">
      <input
        type="file"
        class="siimple-input--fluid"
        name="file"
        accept="image/*"
        data-input-name="uploadFile"
        onchange={actions.onChange}
      />
      <div>
        <button class="siimple-btn siimple-btn--blue" onclick={actions.save}>
          アップロード
        </button>
      </div>
      <div>
        <Link to={`/`}>トップへ</Link>
      </div>
    </div>
  </main>
);
