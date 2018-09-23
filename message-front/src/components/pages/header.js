import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
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
);
