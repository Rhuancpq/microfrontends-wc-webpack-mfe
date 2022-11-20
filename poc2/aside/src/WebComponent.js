import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

class Microfrontend extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define("aside-microfrontend", Microfrontend);
