class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const styleLink = document.getElementById("footer-style");
    if (styleLink) {
      this.shadowRoot.appendChild(styleLink.cloneNode(true));
    }
  }
}

customElements.define("footer-microfrontend", WebComponent);
