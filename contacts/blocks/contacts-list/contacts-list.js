import { Block } from '../../../blocks/block';
import template from './contacts-list-pug.pug';
/* eslint-disable */
import _ from './contacts-list.scss';
/* eslint-enable */

export class ContactsList extends Block {
  get bemName () {
    return 'contacts-list';
  }
  template (data) {
    return template(data);
  }
}
