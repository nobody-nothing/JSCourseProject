import { Block } from '../../../blocks/block';
import template from './pagination-pug.pug';
/* eslint-disable */
import _ from './pagination.scss';
/* eslint-enable */

export class Pagination extends Block {
  get bemName () {
    return 'pagination';
  }
  template (data) {
    return template(data);
  }
}
