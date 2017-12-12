import level0 from '../img/chars/00/main.gif'
import level1 from '../img/chars/01/main.gif'
import level2 from '../img/chars/02/main.gif'
import level3 from '../img/chars/03/main.gif'
import level4 from '../img/chars/04/main.gif'

export class Avatar {
  constructor (level) {
    const images = [
      level0,
      level1,
      level2,
      level3,
      level4
    ]

    this.level = level
    this.image = images[level].src
    this.x = 50
    this.y = 50
  }
}
