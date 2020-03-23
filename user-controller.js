import { LitElement, html } from 'lit-element';

class UserController extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
      },
      someFieldToBeUpdatedAsynchronously: {
        type: String,
      }
    };
  }

  render() {}

  getName() {}

  setName() {}

  doAsyncBusinessLogic() {}
}

customElements.define('app-user', UserController);
