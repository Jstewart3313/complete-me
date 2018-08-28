import Node from './Node';

export default class Trie {
  constructor() {
    this.totalWords = 0;
    this.root = new Node ();
  }

  count() {
    return this.totalWords;
  }


  insert(word) {
    let currNode = this.root;
    let wordArray = [...word];
    this.insertRecursive (wordArray, currNode);
    this.totalWords++

    }

  insertRecursive (wordArray, currNode) {
      if (wordArray.length < 1) {
        currNode.end = true ;
        return;
      }
      if (currNode.children[wordArray[0]]) {
      currNode = currNode.children[wordArray.shift()];
      } else {
      let letter = wordArray[0];
      currNode.children[letter] = new Node ();
      currNode = currNode.children[letter];
      wordArray.shift();
      }

      return this.insertRecursive (wordArray, currNode)

  }
}




