import("./footer.css");

const template =
  '<footer> \
    <div class="section"> \
      <div class="item"> \
      <a href=""> Item 1 </a> \
      </div> \
      <div class="item"> \
      <a href=""> Item 2 </a> \
      </div> \
      <div class="item"> \
      <a href=""> Item 3 </a> \
      </div> \
    </div> \
    <div class="section"> \
      <div class="item"> \
      <a href=""> Item 4 </a> \
      </div> \
      <div class="item"> \
      <a href=""> Item 5 </a> \
      </div> \
      <div class="item"> \
      <a href=""> Item 6 </a> \
      </div> \
    </div> \
    <div class="section"> \
      <div class="item"> \
      <a href=""> Item 7 </a> \
      </div> \
      <div class="item"> \
      <a href=""> Item 8 </a> \
      </div> \
      <div class="item"> \
      <a href=""> Item 9 </a> \
      </div> \
    </div> \
  </footer>';

class FooterMicrofrontend extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const styleLink = document.getElementById("footer-style");
    if (styleLink) {
      this.shadowRoot.appendChild(styleLink.cloneNode(true));
    }
    const templateElement = document.createElement("template");
    templateElement.innerHTML = template;
    this.shadowRoot.appendChild(templateElement.content.cloneNode(true));
  }

  disconnectedCallback() {
    const styleLink = this.shadowRoot.querySelector("link");
    if (styleLink) {
      styleLink.remove();
    }
  }
}

customElements.define("footer-microfrontend", FooterMicrofrontend);
