export class Block {
    get bemName() {
    return 'block';
    }

    constructor(options) {
        this.options = options;

    }

    template() {
        console.warn('шаблон не определен');
    }

    getElement(name) {
      return this.el.querySelector(`.${this.bemName}__${name}`);
    }

    render(el) {
        this.el = el;
        this.el.innerHTML = this.template(this.options);
    }
}
