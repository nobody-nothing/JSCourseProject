export class Block {
	
	constructor(el, options) {
		this.el = el;
		this.options = options;
	}
	
	template() {
		console.warn('у компонента не определен шаблон');
	}
	
	render() {
		this.el.innerHTML = this.template(this.options);
	}
}