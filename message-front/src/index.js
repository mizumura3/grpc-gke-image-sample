import { h, app } from "hyperapp";
import { Route, location } from "@hyperapp/router";
import { Link } from "@hyperapp/router";
import Upload from "./components/pages/Upload";
import Top from "./components/pages/Top";
import actionsBase from "./actions";

const state = {
  count: 0,
  location: location.state,
  uploadFile: File,
  items: []
};

const actions = {
  ...actionsBase,
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 }),
  location: location.actions
};

const view = (state, actions) => (
  <main>
    <div>
      {state.items.map(item => (
        <img src={item} width="200" height="200" />
      ))}
    </div>
    <Route path="/" render={Top} />
    <Route path="/upload" render={Upload} />
  </main>
);

export const main = app(state, actions, view, document.body);
location.subscribe(main.location);

// 初期処理
main.items();
