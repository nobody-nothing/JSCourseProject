import { Block } from '../../blocks/block';
import template from './letter-box-pug.pug';
import { Textbox } from '../../blocks/textbox/textbox';
import _ from './letter-box.scss';


export class LetterBox extends Block {
  get bemName () {
    return 'letter-box'
  }

  template (data) {
    return template(data);
  }

  constructor (options) {
    super(options);

    this.reciever = new Textbox({
      id: 'receiver',
      value: 'Кому'
    });
    this.topic = new Textbox({
      id: 'topic',
      value: 'Тема'
    });
    this.copy = new Textbox({
      id: 'copy',
    });
    this.letter = new Textbox({
      id: 'letter',
      });
  }

  render (el){
    super.render(el);
    this.reciever.render(this.getElement('reciever'));
    this.topic.render(this.getElement('topic'));
    this.copy.render(this.getElement('copy'));
    this.letter.render(this.getElement('letter'));
  }

}
