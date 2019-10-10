import { View } from '../view';
import template from './card-pug.pug';

import { ContactCard } from '../../blocks/contact-card/contact-card';

/* eslint-disable */
import _ from './card.scss';
/* eslint-enable */

export class Card extends View {
  get bemName () {
    return 'card';
  }
  template (data) {
    return template(data);
  }
  constructor () {
    super();
    this.userinfo = new ContactCard();
  }
  render (el) {
    super.render(el);
    this.userinfo.render(this.getElement('userinfo'));
  }
}
