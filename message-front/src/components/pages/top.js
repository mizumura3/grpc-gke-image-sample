import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <main>
    <div>
      {state.items.map(item => (
        <img src={item} width="200" height="200" />
      ))}
    </div>
  </main>
);
