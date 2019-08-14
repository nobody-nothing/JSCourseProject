import { View } from '../view';
import template from './contact-card-view-pug.pug';
import { ContactCard } from '../../contact-card/contact-card';

export class ContactCardView extends View {
  get bemName() {
    return 'contact-card-view';
  }

  template (data) {
    return template(data);
  }

  constructor () {
    super();
    this.userinfo = new ContactCard();
  }

  render(el) {
    super.render(el);
    this.userinfo.render(this.getElement('userinfo'));
  }
}
