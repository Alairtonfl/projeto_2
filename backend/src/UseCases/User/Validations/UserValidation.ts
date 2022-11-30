import User from '@User/Entity/User';

export default new class {
  validate(user: User) : Error | boolean {
    if (user.password.length < 8 || user.password.length > 15) { return new Error('Password needs 8 to 15 characters'); }

    if (user.name.length < 5 || user.name.length > 15) { return new Error('Name needs 5 to 15 characters'); }

    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(!regexp.test(user.email)) { return new Error('Email format incorrect.'); }

    
    return true;
  }
}();
