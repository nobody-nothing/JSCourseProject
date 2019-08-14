import { View } from '../view';
import template from './contact-list-view-pug.pug';

import { ContactList } from '../../contacts-list/contact-list';
import { Pagination } from '../../pagination/pagination';

export class ContactListView extends View {
  get bemName() {
    return 'contact-list-view';
  }

  template (data) {
    return template(data);
  }

  constructor () {
    super();
    this.contacts = new ContactList();
    this.pagination = new Pagination();
  }

  render(el) {
    super.render(el);
    this.contacts.render(this.getElement('contact'));
    this.pagination.render(this.getElement('pagination'));

  }
}
