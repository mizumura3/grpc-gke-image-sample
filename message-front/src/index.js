import { h, app } from "hyperapp";
import { Route, location } from "@hyperapp/router";
import Hoge from "./components/pages/Hoge";
import actionsBase from "./actions";

const state = {
  count: 0,
  location: location.state,
  uploadFile: File,
  images: []
};

const actions = {
  ...actionsBase,
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 }),
  location: location.actions
};

const view = (state, actions) => (
  <main>
    <h1>{state.count}</h1>
    <button onclick={actions.down}>-</button>
    <button onclick={actions.up}>+</button>
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
    <div>aaa</div>
    <div>
      <Route path="/hoge" render={Hoge} />
    </div>
    <div>
      {state.images.map(image => (
        <img src={image} />
      ))}
    </div>
  </main>
);

export const main = app(state, actions, view, document.body);
location.subscribe(main.location);
