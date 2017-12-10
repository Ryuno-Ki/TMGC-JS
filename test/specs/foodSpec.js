const chai = require('chai');
const expect = chai.expect;

const food = require('../foodModel');

describe('Food', () => {
  describe('meat', () => {
    beforeEach(() => {
      this.meat = new food.Meat();
    });

    it('has high nutrition', () => {
      expect(this.meat.nutrition).to.be.above(20);
    });
  });
});
