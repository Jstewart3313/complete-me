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
      if (currNode[wordArray[0]]) {
      currNode = currNode[wordArray.shift()];
      } else {
      let letter = wordArray[0];
      currNode[letter] = new Node ();
      currNode = currNode[letter];
      wordArray.shift();
      }

      return this.insertRecursive (wordArray, currNode)
  }


  suggest(entry) {
    if (Object.keys(this.root).includes(entry[0])) {
      let splitEntry = entry.split('');
      let path = splitEntry.reduce( (key, letter) => {
        return key[letter];
      }, this.root);

      return this.grabWords(path, entry);
    } else {
        return "no bueno";
      }
  }

  grabWords(obj, entry) {
   let results = [];
    Object.keys(obj).forEach( key => {
     if (key !== 'end') {
       results.push(...this.grabWords(obj[key], entry + key));
     } else if (obj.end) {
       results.push(entry);
     }
   })
   return results;
 }


  populate( dictionary ) {
    dictionary.forEach( word => {
      this.insert(word);
    })
  };



}





