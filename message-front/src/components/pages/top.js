import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <main>
    <div>
      {state.items.map((item, index) => (
        <img key={index} src={item} width="200" height="200" />
      ))}
    </div>
  </main>
);
