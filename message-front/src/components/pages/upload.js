import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <main>
    <div>
      <input
        type="file"
        class="siimple-input--fluid"
        name="file"
        accept="image/*"
        data-input-name="uploadFile"
        onchange={actions.onChange}
      />
    </div>
    <div>
      <button class="siimple-btn siimple-btn--blue" onclick={actions.save}>
        アップロード
      </button>
      <div class="simple-form-field">
        <div class="siimple-btn siimple-btn--blue">Send comment</div>
      </div>
    </div>
    <div>
      <Link to={`/`}>トップへ</Link>
    </div>
  </main>
);
