import { h, app } from "hyperapp";
import { Route, location } from "@hyperapp/router";
import Upload from "./components/pages/Upload";
import Top from "./components/pages/Top";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import actionsBase from "./actions";
import "./global.css";
import "./bulma.css";

const state = {
  count: 0,
  location: location.state,
  uploadFile: File,
  items: []
};

const actions = {
  ...actionsBase,
  location: location.actions
};

const view = (state, actions) => (
  <main>
    <div class="container">
      <Header />
    </div>

    <Route path="/" render={Top} />
    <Route path="/upload" render={Upload} />
    <div class="container">
      <Footer />
    </div>
  </main>
);

export const main = app(state, actions, view, document.body);
location.subscribe(main.location);

// 初期処理
main.items();
