const chai = require('chai');
const expect = chai.expect;

const food = require('../foodModel');

describe('Food', () => {
  describe('bread', () => {
    beforeEach(() => {
      this.bread = new food.Bread();
    });

    it('has high nutrition', () => {
      expect(this.bread.nutrition).to.be.above(20);
    });
  });
});
