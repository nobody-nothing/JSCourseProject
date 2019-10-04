import { ContactCard } from './blocks/contact-card/contact-card';
import { ContactList } from './blocks/contacts-list/contact-list';
import { Pagination } from './blocks/pagination/pagination';

import { ContactCardView } from './blocks/views/card/contact-card-view';
import { ContactListView } from './blocks/views/list/contact-list-view';
import { Router } from '../libs/router';

window.ContactCard = ContactCard;
window.ContactList = ContactList;
window.Pagination = Pagination;

window.addEventListener('DOMContentLoaded', () => {

  const cardView = new ContactCardView();
  const listView = new ContactListView();
  const router = new Router();

  console.log('pre-render');
  console.log('card view render initiated');
  cardView.render(document.querySelector('.js-card-view'));
  console.log('card view render complete');
  console.log('contacts view render initiated');
  listView.render(document.querySelector('.js-contacts-view'));
  console.log('contacts view render complete');
  console.log('post-render');
  router.register('contacts', listView, true);
  router.register('card', cardView);
  console.log('router registration');
  router.start();

})
