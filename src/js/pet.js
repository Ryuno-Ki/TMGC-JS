export class Pet {
  constructor(name) {
    this.name = name;

    this.age = 0;
    this.sex = this._setSex();
  }

  /**
   * Predicate indicating hunger status
   */
  isHungry() {
    return this.hungerLevel > 30;
  }

  eat(food) {
    this.hungerLevel -= food.nutrition;
  }

  poo() {
    this.hungerLevel += 10;
  }

  get hungerLevel() {
    const defaultHungerLevel = 50;
    if (!this._hungerLevel) {
      this._hungerLevel = defaultHungerLevel;
    }
    return this._hungerLevel;
  }

  set hungerLevel(updated) {
    const lowerTreshold = 0;
    const upperTreshold = 100;
    const current = this._hungerLevel;

    if (updated < current) {
      if (current - updated < lowerTreshold) {
        this._hungerLevel = lowerTreshold;
      } else {
        this._hungerLevel = current - updated;
      }
    } else if (updated > current) {
      if (current + updated > upperTreshold) {
        this._hungerLevel = upperTreshold;
      } else {
        this._hungerLevel = current + updated;
      }
    } else {
      this._hungerLevel = current;
    }
  }

  /**
   * Pick sex at random on initialisation.
   * @private
   * @returns {string} sex
   */
  _setSex() {
    const sex = ['male', 'female'];
    const index = Math.floor(Math.random()*sex.length);
    return sex[index];
  }
}
