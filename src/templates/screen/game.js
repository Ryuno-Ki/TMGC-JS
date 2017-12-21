import html from 'choo/html'

import { Game } from '../../js/game'
import { emitAfter } from '../../js/utils/emitter'
import { getGamePosition } from '../../js/utils/position'

export const render = (context, emit) => {
  const game = context.game ? new Game() : null

  const play = (game) => {
    const pet = context.pet

    pet.action = 'play'
    pet.play(game)

    emitAfter({
      state: context,
      identifier: 'game:played',
      delay: 3000,
      emit: emit
    }, () => {
      pet.action = null
    })
  }

  if (game) {
    play(game)

    const coordinates = getGamePosition(context)
    const translation = `${coordinates.x}px, ${coordinates.y}px`

    return html`
      <div class="game active">
        <img src="${game.image}"
             alt="Game"
             style="transform: translate(${translation})" />
      </div>
    `
  } else {
    return html`<div class="game"></div>`
  }
}
