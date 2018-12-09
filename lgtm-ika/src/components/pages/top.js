import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <main>
    <div class="container">
      <div class="columns is-multiline">
        {state.items.map((item, index) => (
          <div class="column is-one-quarter">
            <img key={index} src={item} width="200" height="200" />
            <input
              type="text"
              readonly
              value={"[![LGTM](".concat(item).concat(")]")}
              onclick={e => {
                actions.set({
                  code: e.target.value
                });
                actions.copy();
              }}
            />
            <button
              onclick={e => {
                actions.set({
                  code: e.target.value
                });
                actions.copy();
              }}
              value={"[![LGTM](".concat(item).concat(")]")}
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  </main>
);
