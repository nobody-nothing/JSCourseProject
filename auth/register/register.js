import _ from './register.scss';
require("babel-polyfill");
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
      value: '',
      id: 'email',
      required: false
    });
    this.userPassword = new Textbox({
      value: '',
      id: 'password',
      required: false
    });
    this.userPasswordConfirm = new Textbox({
      value: '',
      id: 'passwordCon',
      required: false
    });
    this.userPhoneNum = new Textbox({
      value: '+79969719904',
      id: 'phone',
      required: false
    })
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePhone(phone) {
    const URL = `http://apilayer.net/api/validate?access_key=9e5cdddd01eed82d6968658030baeac4&number=${phone}&country_code&format=1`;
    return fetch(URL)
      .then(response => response.json())
      .then(data => data.valid)
  }

  async verify (userEmail, userPassword, userPasswordConfirm, userPhoneNum, userName) {
    let passport = [0,0,0];


    if (userEmail.length == 0) {
      console.log(userEmail.length);
      console.log('required check passed');
      console.log(document.getElementById('email').required);
      document.getElementById('email').required = true;

    } else if (this.validateEmail(userEmail)) {
      document.getElementById('email').classList.remove('_nopass');
      document.getElementById('email').classList.add('_pass');
      document.querySelector('.emailNotValid').hidden = true;
      passport[0] = 1;

    } else {
      document.getElementById('email').classList.remove('_pass');
      document.getElementById('email').classList.add('_nopass');
      document.querySelector('.emailNotValid').hidden = false;
      passport[0] = 0;
    };

    if (userPassword !== userPasswordConfirm) {
      document.getElementById('passwordCon').classList.remove('_pass');
      document.getElementById('passwordCon').classList.add('_nopass');
      document.querySelector('.passNotValid').hidden = false;
      passport[1] = 0;

    } else {
      document.getElementById('password').classList.remove('_nopass');
      document.getElementById('password').classList.add('_pass');
      document.getElementById('passwordCon').classList.remove('_nopass');
      document.getElementById('passwordCon').classList.add('_pass');

      document.querySelectorAll('.passNoMatch').forEach((elem) => {
        elem.hidden = true;
      });
      passport[1] = 1;
    };

/*    await this.validatePhone(userPhoneNum).then(isValid => {
      if (!isValid) {
        document.getElementById('phone').classList.remove('_pass');
        document.getElementById('phone').classList.add('_nopass');
        document.querySelector('.phoneNotValid').hidden = false;
        passport[2] = 0;
      } else {
        document.getElementById('phone').classList.remove('_nopass');
        document.getElementById('phone').classList.add('_pass');
        document.querySelector('.phoneNotValid').hidden = true;
        passport[2] = 1;
      };
    })*/

    if (passport.indexOf(0) != -1) {
      document.querySelector('.verifyNotPassed').hidden = false;
      console.log('shits no pass, m8');
    } else {
      document.querySelector('.verifyNotPassed').hidden = true;
      console.log('verify passed');
    }

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
     this.verify(this.userEmail.value, this.userPassword.value, this.userPasswordConfirm.value, this.userPhoneNum.value);
    });
  }
}
