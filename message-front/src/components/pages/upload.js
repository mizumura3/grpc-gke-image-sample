import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <main>
    <div>
      <input
        type="file"
        name="file"
        accept="image/*"
        data-input-name="uploadFile"
        onchange={actions.onChange}
      />
    </div>
    <div>
      <button class="button" onclick={actions.save}>
        アップロード
      </button>
    </div>
    <div>
      <Link to={`/`}>トップへ</Link>
    </div>
  </main>
);
