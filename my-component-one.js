import { LitElement, html } from 'lit-element';
import { userController } from './user/userController';
import { User } from './user/User';

class MyComponentOne extends LitElement {
  static get properties() {
    return {
      user: Object,
    };
  }

  constructor() {
    super();
    this.user = new User();
  }

  saveUser(event) {
    event.preventDefault();
    userController.updateUser('User1', this.user);
  }

  updateUser(event) {
    const {id, value} = event.target;
    this.user[id] = value;
  }

  render() {
    return html`
      <h2>One</h2>
      <form id="userForm" @change=${this.updateUser}>
        <div>
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName">
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" @blur="${this.updateUser}">
        </div>
        <button @click="${this.saveUser}">Update user name</button>
        <user-controller id="userController"></user-controller>
      </form>
   `;
  }

}

customElements.define('my-component-one', MyComponentOne);
