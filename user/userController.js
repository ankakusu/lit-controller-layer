import { userClient } from './userClient';

class UserController {
  set user(user) {
    this._user = user;
  }
  get user() {
    if (!this._user) this._user = {};
    return this._user;
  }

  constructor() {
    console.log('User Controller Created');
  }

  updateUser(userId, user) {
    this.user = user;
    console.log(this.user);
    userClient.updateUser(userId, user);
  }
}

export const userController = new UserController();
