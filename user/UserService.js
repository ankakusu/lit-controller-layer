import { BehaviorSubject } from 'rxjs';
import { userClient } from './UserClient';

/**
 * User service holds the state for User
 */
class UserService {
  constructor() {
    this._userSubject = new BehaviorSubject({});
    this.user = this._userSubject.asObservable();
  }

  updateUser(user) {
    this._userSubject.next(user);
    userClient.updateUser(user);
  }

}

export const userService = new UserService();
