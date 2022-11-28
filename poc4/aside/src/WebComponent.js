import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

class Microfrontend extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    ReactDOM.render(<App />, this.shadowRoot);
  }
}

customElements.define("aside-microfrontend", Microfrontend);
