import { createApp } from "vue";
import App from "./App.vue";

class WebComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const app = createApp(App);
    app.mount(this);
  }
}

customElements.define("header-microfrontend", WebComponent);
