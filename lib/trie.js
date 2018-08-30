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
    this.totalWords++;
  }

  insertRecursive(wordArray, currNode) {
    if (!wordArray.length) {
      currNode.end = true; 
      return;
    } 
    let letter = wordArray.shift(); 
    
    if (!currNode[letter]) {
      currNode[letter] = new Node();
    }
    currNode = currNode[letter]; 
    return this.insertRecursive(wordArray, currNode); 
  }

  suggest(wordArray) {
    if (Object.keys(this.root).includes(wordArray[0])) {
      let splitEntry = wordArray.split('');
      let pathRoute = splitEntry.reduce( (key, letter) => {
        return key[letter];
      }, this.root);

      return this.grabWords(pathRoute, wordArray);
    } else {
      return "no bueno";
    }
  }

  grabWords(pathRoute, wordArray) {
    let results = [];

    Object.keys(pathRoute).forEach( key => {
      if (key !== 'end') {
        results.push(...this.grabWords(pathRoute[key], wordArray + key));
      } else if (pathRoute.end) {
        results.push(wordArray);
      }
    });
    return results;
  }


  populate( dictionary ) {
    dictionary.forEach( word => {
      this.insert(word);
    });
  }
}





