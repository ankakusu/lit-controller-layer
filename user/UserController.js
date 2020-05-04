import { userService } from './UserService';

/**
 * User Controller orchestrates between several different services to handle complex functionality
 */
class UserController {
  updateUser(user) {
    userService.updateUser(user);
  }
}

export const userController = new UserController();
