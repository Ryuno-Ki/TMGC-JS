import level0Main from '../img/chars/00/main.gif'
import level1Main from '../img/chars/01/main.gif'
import level2Main from '../img/chars/02/main.gif'
import level3Main from '../img/chars/03/main.gif'
import level4Main from '../img/chars/04/main.gif'

import level1Eat from '../img/chars/01/eat.gif'
import level2Eat from '../img/chars/02/eat.gif'
import level3Eat from '../img/chars/03/eat.gif'
import level4Eat from '../img/chars/04/eat.gif'

import level1Play from '../img/chars/01/play.gif'
import level2Play from '../img/chars/02/play.gif'
import level3Play from '../img/chars/03/play.gif'
import level4Play from '../img/chars/04/play.gif'

const defaultAvatars = [
  level0Main,
  level1Main,
  level2Main,
  level3Main,
  level4Main
]

const eatingAvatars = [
  level0Main,
  level1Eat,
  level2Eat,
  level3Eat,
  level4Eat
]

const playingAvatars = [
  level0Main,
  level1Play,
  level2Play,
  level3Play,
  level4Play
]

export class Avatar {
  constructor (level, action = null) {
    this.level = level
    this.image = Avatar.getImage(level, action)
    this.x = 50
    this.y = 50
  }

  static getImage (level, action) {
    let avatar

    switch (action) {
      case 'eat':
        avatar = eatingAvatars[ level ]
        break
      case 'play':
        avatar = playingAvatars[ level ]
        break
      default:
        avatar = defaultAvatars[ level ]
    }

    return avatar
  }
}
