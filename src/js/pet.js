import { Avatar } from './avatar'

export class Pet {
  static serialise () {
    return JSON.stringify({
      hungerLevel: this.hungerLevel,
      level: this.level,
      name: this.name,
      sex: this.sex
    })
  }

  static deserialise (data) {
    const state = JSON.parse(data)
    return new Pet(state)
  }

  static get initialState () {
    return {
      hungerLevel: 50,
      level: 0,
      name: 'Waldo',
      sex: Pet._setSex()
    }
  }

  /**
   * Pick sex at random on initialisation.
   * @private
   * @returns {string} sex
   */
  static _setSex () {
    const sex = ['male', 'female']
    const index = Math.floor(Math.random() * sex.length)
    return sex[index]
  }

  constructor (state) {
    if (!state) { state = Pet.initialState }
    this.name = state.name

    this.level = state.level
    this.sex = state.sex
    this._bornAt = new Date()
    this._hungerLevel = state.hungerLevel
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
}

export const growTimes = [
  300,
  5 * 1000,
  5 * 60 * 1000,
  15 * 60 * 1000,
  60 * 60 * 1000
]
