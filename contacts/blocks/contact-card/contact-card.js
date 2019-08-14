import { Block } from '../../../blocks/block';
import template from './contact-card-pug.pug';
import _ from './contact-card.scss';

export class ContactCard extends Block {
    get bemName() {
        return 'contact-card';
    }

    template(data) {
        return template(data);
    }

    get value () {
        return this.getElement('input').value;
    }

}
