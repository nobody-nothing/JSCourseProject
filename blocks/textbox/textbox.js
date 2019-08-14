import { Block } from '../block';
import template from './textbox-pug.pug';
import _ from './textbox.scss';

/*
function template(date) {
    return `<div class = 'textbox'>
            <input class = 'textbox_input' value = "${data.value}" />
            </div>`;
}
*/

export class Textbox extends Block {
    get bemName() {
    return 'textbox';
    }

    template(data) {
        return template(data);
    }

    get value () {
        return this.getElement('input').value;
    }
}
