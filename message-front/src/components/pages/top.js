import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <main>
    <div class="container">
      <div class="columns is-multiline">
        {state.items.map((item, index) => (
          <div class="column is-one-quarter">
            <img key={index} src={item} width="200" height="200" />
          </div>
        ))}
      </div>
    </div>
  </main>
);
