import { createApp } from "vue";
import App from "./App.vue";

class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const app = createApp(App);
    app.mount(this.shadowRoot);
    const styleLink = document.getElementById("header-style");
    this.shadowRoot.appendChild(styleLink.cloneNode(true));
  }
}

customElements.define("header-microfrontend", WebComponent);
