import { Block } from '../block';
import template from './textbox.pug';
import _ from './textbox.scss';  
 
export class Textbox extends Block {
	
	template(data) {
		return template(data);
	
	}
	
	constructor(...args) {
		super(...args);
		this.template = template;
	}
}
