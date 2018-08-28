import { expect } from 'chai';
import Trie from '../lib/trie';


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

  it('should default root to null', () => {
    expect(trie.root).to.equal(null);
  })

  it('should inscrease the totalWords at each new word', () => {
    expect(trie.count()).to.equal(0)
    trie.insert('bigityBoop')
    expect(trie.count()).to.equal(1);
  })
  it('should ')
})