import { Avatar } from './avatar'

export class Pet {
  constructor (name) {
    this.name = name

    this.level = 0
    this.sex = this._setSex()
    this._bornAt = new Date()
  }

  /**
   * Predicate indicating hunger status
   */
  isHungry () {
    return this.hungerLevel > 30
  }

  eat (food) {
    this.hungerLevel -= food.nutrition
  }

  grow () {
    this.level += 1
  }

  poo () {
    this.hungerLevel += 10
  }

  get avatar () {
    return new Avatar(this.level)
  }

  get hungerLevel () {
    const defaultHungerLevel = 50
    if (typeof this._hungerLevel === 'undefined') {
      this._hungerLevel = defaultHungerLevel
    }
    return this._hungerLevel
  }

  set hungerLevel (updated) {
    const lowerTreshold = 0
    const upperTreshold = 100
    const current = this._hungerLevel

    if (updated < current) {
      this._hungerLevel = (updated <= lowerTreshold) ? lowerTreshold : updated
    } else if (updated > current) {
      this._hungerLevel = (updated >= upperTreshold) ? upperTreshold : updated
    } else {
      this._hungerLevel = current
    }
  }

  /**
   * Pick sex at random on initialisation.
   * @private
   * @returns {string} sex
   */
  _setSex () {
    const sex = ['male', 'female']
    const index = Math.floor(Math.random() * sex.length)
    return sex[index]
  }
}

export const growTimes = [
  300,
  5 * 1000,
  5 * 60 * 1000,
  15 * 60 * 1000,
  60 * 60 * 1000
]
