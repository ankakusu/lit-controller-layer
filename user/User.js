export class User {
  set firstName(firstName) {
    if (!firstName) this._firstName = '';

    this._firstName = firstName;
  }
  get firstName() {
    return this._firstName;
  }

  set lastName(lastName) {
    if (!lastName) this._lastName = '';

    this._lastName = lastName;
  }
  get lastName() {
    return this._lastName;
  }

  constructor(user) {
    if (!user) {
      this.firstName = '';
      this.lastName = '';
      return;
    }

    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }
}
