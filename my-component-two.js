import { LitElement, html } from 'lit-element';
import { userController } from './user/userController';

class MyComponentTwo extends LitElement {
  render() {
    return html`
      <h2>Two</h2>
      <p>User: ${userController.user.firstName}</p>
    `;
  }
}

customElements.define('my-component-two', MyComponentTwo);
