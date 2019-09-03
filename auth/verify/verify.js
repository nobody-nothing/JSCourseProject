import _ from './verify.scss';
import template from './verify-pug.pug';
import { Block } from '../../blocks/block';
import { Textbox } from '../../blocks/textbox/textbox';

export class Verify extends Block {
  get bemName () {
    return 'verify';
  }

  template (data) {
    return template(data);
  }

  constructor (options) {
    super(options);
    this.verify = new Textbox({
      value: '',
      id: 'verify',
      required: true
    });
  }

  render (el) {
    super.render(el);
    this.loginEmail.render(this.getElement('verify'));
  }
}
