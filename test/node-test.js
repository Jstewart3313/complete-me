import { expect } from 'chai';

import Node from '../lib/Node';

describe('NODE', () => {
  let node;

  beforeEach( () => {
    node = new Node('p');
  })

  it('should exist right now', () => {
    expect(node).to.exist;
  })

  it('should default children to null', () => {
    expect(node.children).to.equal(null);
  })

  it('should take a letter as an argument and assign it to the letter property', () => {
    expect(node.letter).to.equal('p');
  })

  it('should defautl end to null', () => {
    expect(node.end).to.equal(false);
  })
})