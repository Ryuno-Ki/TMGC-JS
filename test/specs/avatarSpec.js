const chai = require('chai');
const string = require('chai-string');
chai.use(string);
const expect = chai.expect;

const Avatar = require('../avatarModel').Avatar;

describe('Avatar', () => {
  it('is created with a level', () => {
    const level = 0;
    const avatar = new Avatar(level);
    expect(avatar.level).to.equal(level);
  });

  describe('when created', () => {
    beforeEach(() => {
      this.avatar = new Avatar(0);
    });

    it('has an image attached', () => {
      expect(this.avatar.image).to.be.a('string');
      expect(this.avatar.image).to.endsWith('main.gif');
    });
  });
});
 
