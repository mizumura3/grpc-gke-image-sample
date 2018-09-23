import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <nav
    class="navbar has-shadow is-spaced"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <Link class="navbar-item" to={`/`}>
        LGTM
      </Link>

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
        <Link class="navbar-item" to={`/`}>
          HOME
        </Link>
        <Link class="navbar-item" to={`/upload`}>
          Submit
        </Link>
        <Link class="navbar-item" to={`/`}>
          Random
        </Link>
      </div>
    </div>
  </nav>
);
