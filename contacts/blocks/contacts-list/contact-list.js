import { Block } from '../../../blocks/block';
import _ from './contact-list.scss';
import template from './contact-list-pug.pug';

export class ContactList extends Block {
  get bemName() {
    return 'contact-list';
  }

  template (data) {
    return template(data);
  }

}
