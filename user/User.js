
export class User {
  constructor() {
    this.firstName = '';
    this.lastName = '';
  }

  static new() {
    return UserSerializer.new();
  }

  static fromJson(json) {
    return UserSerializer.fromJson(json);
  }
}

class UserSerializer {
  static new() {
    return new User();
  }

  static fromJson(json) {
    const user = new User();
    user.firstName = json.firstName;
    user.lastName = json.lastName;
    return user;
  }
}
