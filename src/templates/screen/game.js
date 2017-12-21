import html from 'choo/html'

import { Game } from '../../js/game'
import { getGamePosition } from '../../js/utils/position'

export const render = (context, emit) => {
  const game = context.game ? new Game() : null

  const play = (game) => {
    context.pet.play(game)
    const identifier = 'game:played'
    const oldHandler = context.timeoutHandlers[ identifier ]
    if (oldHandler) { clearTimeout(oldHandler) }

    const handler = setTimeout(() => {
      emit(identifier)
    }, 3000)
    context.timeoutHandlers[ identifier ] = handler
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
