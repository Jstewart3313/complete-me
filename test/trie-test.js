import { expect } from 'chai';
import Trie from '../lib/trie';
import Node from '../lib/node';


describe('TRIE', () => {
  let trie;

  beforeEach ( () => {
    trie = new Trie();
  })

  it('should exist', () => {
    expect(trie).to.exist;
  })

  it('should have a default totalWords of 0', () => {
    expect(trie.totalWords).to.equal(0);
  })

  it('should default root to empy object', () => {
    expect(trie.root.children).to.deep.equal({});
  })

  it('should inscrease the totalWords at each new word', () => {
    expect(trie.count()).to.equal(0)
    trie.insert('bigityBoop')
    expect(trie.count()).to.equal(1);
  })
 it ('should insert word correctly when calling insert', () => {
    trie.insert ('hello');
    trie.insert ('cool')
    trie.insert ('poop')
    // console.log(JSON.stringify(trie, null, 4))
    expect(Object.keys(trie.root.children)).to.deep.eq([ 'h', 'c', 'p' ])
  })
})


