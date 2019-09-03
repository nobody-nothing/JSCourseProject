import _ from './login.scss';
import template from './login-pug.pug';
import { Block } from '../../blocks/block';
import { Textbox } from '../../blocks/textbox/textbox';

export class Login extends Block {
  get bemName () {
    return 'login';
  }

  template (data) {
    return template(data);
  }

  constructor (options) {
    super(options);
    this.loginEmail = new Textbox({
      value: '',
      id: 'email',
      required: true
    });
    this.loginPassword = new Textbox({
      value: '',
      id: 'password',
      required: true
    });
  }

  render (el) {
    super.render(el);
    this.loginEmail.render(this.getElement('email'));
    this.loginPassword.render(this.getElement('password'));
  }
}
