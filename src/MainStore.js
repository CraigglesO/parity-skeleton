// @flow
import { observable } from 'mobx';
import { Api }        from '@parity/parity.js';

/** Constructors **/
const transport = new Api.Transport.Http('http://localhost:8545');

class MainStore {
  @observable x: Array<number> = [];
  api:           Api           = new Api(transport);
  constructor() {
    console.log("Mainstore.api", this.api);
  }
}

export default new MainStore();
