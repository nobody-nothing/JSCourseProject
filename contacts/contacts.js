import { ContactCard } from './blocks/contact-card/contact-card';
import { ContactList} from './blocks/contacts-list/contact-list';
import { Pagination } from './blocks/pagination/pagination';

import {ContactCardView} from './blocks/views/card/contact-card-view';
import {ContactListView} from './blocks/views/list/contact-list-view';
import { Router } from '../libs/router';

window.ContactCard = ContactCard;
window.ContactList = ContactList;
window.Pagination = Pagination;

window.addEventListener('DOMContentLoaded', () => {
  const cardView = new ContactCardView();
  const listView = new ContactListView();
  const router = new Router();

  cardView.render(document.querySelector('.js-card-view'));
  listView.render(document.querySelector('.js-contacts-view'));

  router.register('contacts', listView, true);
  router.register('card', cardView);

  router.start();

})
