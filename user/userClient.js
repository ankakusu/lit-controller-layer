class UserClient {
  constructor() {
    console.log('UserClient created');
    this._url = 'https://some-url';
  }

  get url(){
    return this._url;
  }

  fetchUser(userId) {
    console.log(`GET ${this.url}/${userId}` );
  }

  updateUser(userId, data) {
    console.log(`PUT ${this.url}/${userId}`, data);
  }

  createUser(userId, data) {
    console.log(`POST ${this.url}/${userId}`, data);
  }

  deleteUser(userId) {
    console.log(`DELETE ${this.url}/${userId}`);
  }
}

export const userClient = new UserClient();
