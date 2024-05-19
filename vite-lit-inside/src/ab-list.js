import { html, css, LitElement } from "lit";

class AbList extends LitElement {
  static styles = css`
    :host {
      border: 1px solid black;
    }
  `;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = "Somebody";
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define("ab-list", AbList);
