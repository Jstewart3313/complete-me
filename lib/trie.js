import Node from './Node';

export default class Trie {
  constructor() {
    this.totalWords = 0;
    this.root = null;
    this.word = [];
  }

  count() {
    return this.totalWords;
  }


  insert(word) {
    this.totalWords++
    this.words.push(word);
  }
}