import { LitElement, html } from 'lit-element';
import './app-user';

class MyComponentTwo extends LitElement {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <p>Two</p>
      <user-controller></user-controller>
    `;
  }
}

customElements.define('my-data-two', MyComponentTwo);
