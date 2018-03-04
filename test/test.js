const chai = require('chai');
const expect = chai.expect;
const evaluate = require('../evaluator.js');

describe('evaluate.js', () => {
  it('+ 1 + 2 3 => 6', () => {
    expect(evaluate.main('+ 1 + 2 3')).to.equal(6);
  });

  it('- 1 3 + 6 => 8', () => {
    expect(evaluate.main('- 1 3 + 6')).to.equal(8);
  });

  it('- 1 3 x 6 => 4', () => {
    expect(evaluate.main('- 1 3 x 6')).to.be.undefined;
  });

  it('4 => 4', () => {
    expect(evaluate.main('4')).to.equal(4);
  });

  it('xxxxx => undefined', () => {
    expect(evaluate.main('xxxxx')).to.be.undefined;
  });
});
