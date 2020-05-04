import { LitElement, html } from 'lit-element';
import { userController } from './user/userController';
import { User } from './user/User';
import { userService } from './user/UserService';

class MyComponentOne extends LitElement {
  static get properties() {
    return {
      user: Object,
    };
  }

  constructor() {
    super();
    this.user = User.new();
    userService.user.subscribe((user) => this.user = user);
  }

  updateUser(event) {
    event.preventDefault();

    userController.updateUser(User.fromJson({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
    }));
  }

  render() {
    return html`
      <h2>One</h2>
      <div>
        <span>${this.user.firstName}</span> <span>${this.user.lastName}</span>
      </div>
      <form id="userForm" @submit="${this.updateUser}">
        <div>
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName">
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName">
        </div>
        <button>Update user name</button>
        <user-controller id="userController"></user-controller>
      </form>
   `;
  }

}

customElements.define('my-component-one', MyComponentOne);
