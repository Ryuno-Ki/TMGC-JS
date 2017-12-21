import { Avatar } from './avatar'

const hungerTreshold = 30
const hungerThroughPoo = 10
const happinessThroughBoredom = 5
const happinessThroughPlay = 10

export class Pet {
  static serialise () {
    return JSON.stringify({
      happinessLevel: this.happinessLevel,
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
      happinessLevel: 50,
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
    this._action = null
    this._bornAt = new Date()
    this._happinessLevel = state.happinessLevel
    this._hungerLevel = state.hungerLevel
  }

  /**
   * Predicate indicating hunger status
   */
  isHungry () {
    return this.hungerLevel > hungerTreshold
  }

  bored () {
    this.happinessLevel -= happinessThroughBoredom
  }

  eat (food) {
    this.hungerLevel -= food.nutrition
  }

  grow () {
    this.level += 1
  }

  poo () {
    this.hungerLevel += hungerThroughPoo
  }

  play () {
    this.happinessLevel += happinessThroughPlay
  }

  get avatar () {
    const avatar = new Avatar(this.level, this.action)
    avatar.x = Math.floor(10 + Math.random() * 80)
    avatar.y = Math.floor(10 + Math.random() * 80)
    return avatar
  }

  get happinessLevel () {
    return this._happinessLevel
  }

  set happinessLevel (updated) {
    const lowerTreshold = 0
    const upperTreshold = 100
    const current = this._happinessLevel

    if (updated < current) {
      this._happinessLevel = (updated <= lowerTreshold) ? lowerTreshold : updated
    } else if (updated > current) {
      this._happinessLevel = (updated >= upperTreshold) ? upperTreshold : updated
    } else {
      this._happinessLevel = current
    }
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
