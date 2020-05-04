import { LitElement, html } from 'lit-element';
import { userService } from './user/UserService';
import { User } from './user/User';

class MyComponentTwo extends LitElement {
  static get properties() {
    return {
      user: {
        type: Object,
        reflect: true,
      },
    }
  }
  constructor() {
    super();
    this.user = User.new();
    userService.user.subscribe(this.updateUser.bind(this));
  }

  updateUser(user) {
    this.user = {
      ...this.user,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }

  render() {
    return html`
      <h2>Two</h2>
      <p>User: ${this.user.firstName}</p>
    `;
  }
}

customElements.define('my-component-two', MyComponentTwo);
