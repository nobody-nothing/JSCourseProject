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
      return this.el.querySelector(`.${this.bemName}_${name}`);
    }

    render(el) {
        console.log('render in block');
        this.el = el;
        this.el.innerHTML = this.template(this.options);
        console.log('render complete');
    }
}
