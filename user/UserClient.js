class UserClient {
  constructor() {
    console.log('UserClient created');
    this.url = 'https://some-url';
  }

  fetchUser(userId) {
    console.log(`GET ${this.url}/${userId}` );
  }

  updateUser(user) {
    console.log(user);
    console.log(`PUT ${this.url}`, user);
  }

  createUser(uuid, data) {
    console.log(`POST ${this.url}/${uuid}`, data);
  }

  deleteUser(uuid) {
    console.log(`DELETE ${this.url}/${uuid}`);
  }
}

export const userClient = new UserClient();
