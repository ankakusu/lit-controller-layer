import { LitElement, html } from 'lit-element';
import './user-controller';

class MyComponentOne extends LitElement {
  static get properties() {
    return {
      userController: {
        type: Object,
        value: [],
      },
    };
  }

  updateUser(event) {
    console.log('update user', event);
  }

  render() {
    return html`
      <p>One</p>
      <div>
        <label for="userName">Set User Name</label>
<!--        Somehow the user controller is injected as a dependency and should be a singleton-->
<!--        <input id="userName" type="text" .value="${this.userController.name}">-->
      </div>
      <button @click="${this.updateUser}">Update user name</button>
      <user-controller id="userController"></user-controller>
   `;
  }

}

customElements.define('my-component-one', MyComponentOne);
