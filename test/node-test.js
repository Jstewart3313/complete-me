import { expect } from 'chai';

import Node from '../lib/Node';

describe('NODE', () => {
  let node;

  beforeEach( () => {
    node = new Node();
  })

  it('should exist right now', () => {
    expect(node).to.exist;
  })

  it('should default children to empty object', () => {
    expect(node.children).to.deep.equal({});
  })

  it('should defautl end to null', () => {
    expect(node.end).to.equal(false);
  })
  it('Should default end to false', () => {
    expect(node.end).to.equal(false)
  })
})