import _ from './register.scss';
import 'babel-polyfill';
import template from './register-pug.pug';
import { Block } from '../../blocks/block';
import { Textbox } from '../../blocks/textbox/textbox';
import { User } from '../userClass';

export class Register extends Block {
  get bemName() {
    return 'register';
  }

  template (data) {
    return template(data);
  }

  constructor (options) {
    super(options);
    this.userName = new Textbox({
      value: 'Vasya',
      id: 'name',
      required: false
    });
    this.userEmail = new Textbox({
      value: 'test@mail.com',
      id: 'email',
      required: false
    });
    this.userPassword = new Textbox({
      value: '123',
      id: 'password',
      required: false
    });
    this.userPasswordConfirm = new Textbox({
      value: '1234',
      id: 'passwordCon',
      required: false
    });
    this.userPhoneNum = new Textbox({
      value: '1234567890000',
      id: 'phone',
      required: false
    })
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePhone(phone) {
    const URL = `http://apilayer.net/api/validate?access_key=84e38f01e802a56aee9867c979fb810d&number=${phone}&country_code&format=1`;
    let promise = new Promise(async function (resolve, reject) {
      let response = await fetch(URL);
      if (response.ok) {
        promise.result = await response.json();
        resolve('done');
      } else {
        console.log('oops error ' + response.status);
      };
    })

    console.log(promise);
    console.log(promise.result);
  }

  verify (userEmail, userPassword, userPasswordConfirm, userPhoneNum, userName) {
    let passport;

    if (!this.validateEmail(userEmail)) {
      document.getElementById('email').classList.add('_nopass');
      document.querySelector('.emailNotValid').hidden = false;
    } else {
      document.getElementById('email').classList.add('_pass');
      document.querySelector('.emailNotValid').hidden = true;
    };

    if (userPassword !== userPasswordConfirm) {
      document.getElementById('passwordCon').classList.add('_nopass');
      document.querySelector('.passNotValid').hidden = false;
    } else {
      document.getElementById('password').classList.add('_pass');
      document.getElementById('passwordCon').classList.add('_pass');

      document.querySelectorAll('.passNoMatch').forEach((elem) => {
        elem.hidden = true;
      });
    };

    if (!this.validatePhone(userPhoneNum)) {
      document.getElementById('phone').classList.add('_nopass');
      document.querySelector('.phoneNotValid').hidden = false;
    } else {
      document.getElementById('phone').classList.add('_pass');
      document.querySelector('.phoneNotValid').hidden = true;
    };
  }

  render(el) {
    super.render(el);
    this.userName.render(this.getElement('name'));
    this.userEmail.render(this.getElement('email'));
    this.userPassword.render(this.getElement('password'));
    this.userPasswordConfirm.render(this.getElement('passwordConfirm'));
    this.userPhoneNum.render(this.getElement('phoneNum'));

    this.el.querySelector('form').addEventListener('submit', event => {
     event.preventDefault();
     const newUser = this.verify(this.userEmail.value, this.userPassword.value, this.userPasswordConfirm.value, this.userPhoneNum.value);
    });
  }
}
