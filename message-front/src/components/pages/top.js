import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <main>
    <nav
      class="navbar has-shadow is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="http://localhost:1234">
          <div>LGTM</div>
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="http://localhost:1234">
            Home
          </a>
          <a class="navbar-item" href="http://localhost:1234">
            Submit
          </a>
          <a class="navbar-item" href="http://localhost:1234">
            Random
          </a>
        </div>
      </div>
    </nav>

    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <button class="button" onclick={actions.items}>
            表示
          </button>
        </p>
      </div>
    </div>

    <div>
      {state.items.map(item => (
        <img src={item} width="200" height="200" />
      ))}
    </div>
  </main>
);
