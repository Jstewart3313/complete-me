import Node from './Node';

export default class Trie {
  constructor() {
    this.totalWords = 0;
    this.root = null;
  }

  count() {
    return this.totalWords;
  }


  insert(word) {
    this.totalWords++
    let currNode = this.root;
    if (this.root === null) {
      currNode = this.word;
    }
  }
}