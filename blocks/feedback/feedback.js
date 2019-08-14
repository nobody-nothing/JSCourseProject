import { Block } from '../block';
import { Textbox } from '../textbox/textbox';
import _ from './feedback.scss';
import template from './feedback-pug.pug';

export class Feedback extends Block {
  get bemName() {
    return 'feedback';
  }

  template (data) {
    return template(data);
  }

  constructor (options) {
    super(options);
    this.userName = new Textbox({
      name: 'test',
      label: 'Ваше имя',
      value: 'hello world',
      required: true
    });

    this.comment = new Textbox({
      name: 'test',
      label: 'Ваше мнение',
      value: 'hello world',
      required: true
    });
  }

  render(el) {
    super.render(el);
    this.userName.render(this.getElement('username'));
    this.comment.render(this.getElement('comment'));

    this.el.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      console.log(this.userName.value, this.comment.value);
    });
  }
}
