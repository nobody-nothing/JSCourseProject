import { Block } from '../../../blocks/block';
import _ from './pagination.scss';
import template from './pagination-pug.pug';

export class Pagination extends Block {
  get bemName() {
    return 'pagination';
  }

  template (data) {
    return template(data);
  }

}
