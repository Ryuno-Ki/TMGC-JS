const chai = require('chai');
const expect = chai.expect;

const Pet = require('../petModel').Pet;

describe('Pet', () => {
  it('has a name', () => {
    const name = 'Waldo'
    const pet = new Pet();
    expect(pet.name).to.equal(name);
  });

  describe('when created', () => {
    beforeEach(() => {
      this.pet = new Pet()
    })

    it('has an avatar', () => {
      expect(this.pet.avatar).to.be.an('object').that.has.any.keys('image')
    })

    it('has a sex', () => {
      expect(this.pet.sex).to.be.oneOf(['male', 'female'])
    })

    it('is hungry', () => {
      expect(this.pet.isHungry()).to.be.true
    })

    describe('after fed', () => {
      it('is no longer hungry', () => {
        const foodMock = { nutrition: 25 }
        expect(this.pet.isHungry()).to.be.true
        this.pet.eat(foodMock)
        expect(this.pet.isHungry()).to.be.false
      })
    });

    describe('after poo', () => {
      beforeEach(() => {
        const foodMock = { nutrition: 25 };
        this.pet.eat(foodMock);
      });

      it('is hungry again', () => {
        expect(this.pet.isHungry()).to.be.false;
        this.pet.poo();
        expect(this.pet.isHungry()).to.be.true;
      });
    });
  });
});
