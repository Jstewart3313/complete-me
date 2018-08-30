import { expect } from 'chai';
import Trie from '../lib/trie';
require('locus');

import fs from 'fs';


describe('TRIE', () => {
  let trie;
  const text = "/usr/share/dict/words";
  const dictionary = fs.readFileSync(text).toString().trim().split('\n');

  beforeEach ( () => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  });

  it('should have a default totalWords of 0', () => {
    expect(trie.totalWords).to.equal(0);
  });

  it('should inscrease the totalWords at each new word', () => {
    expect(trie.count()).to.equal(0);
    trie.insert('bigityBoop');
    expect(trie.count()).to.equal(1);
  });

  it('should suggest an array or words', () => {
    trie.insert ('hello');
    trie.insert ('help');
    trie.insert ('poop');
    let response = trie.suggest('he');
    // eval(locus);
    // console.log(JSON.stringify(trie, null, 4))

    expect(response).to.deep.eq(['hello', 'help']);
  });
  
  it('should populate with words', () => {
    trie.populate(dictionary);
    expect(trie.totalWords).to.eq(235886);
  });



});


