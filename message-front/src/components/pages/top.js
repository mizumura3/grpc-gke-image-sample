import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <main>
    <div>
      <Link to={`/upload`}>アップロード</Link>
    </div>
    <div>
      <button class="button" onclick={actions.items}>
        表示
      </button>
    </div>
    <div>
      {state.items.map(item => (
        <img src={item} width="200" height="200" />
      ))}
    </div>
    <div class="simple-form-field">
      <div class="siimple-btn siimple-btn--blue">Send comment</div>
    </div>
  </main>
);
