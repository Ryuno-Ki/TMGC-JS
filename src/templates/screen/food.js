import html from 'choo/html'

import { Bread } from '../../js/food'
import { emitAfter } from '../../js/utils/emitter'
import { getFoodPosition } from '../../js/utils/position'

export const render = (context, emit) => {
  const food = context.food ? new Bread() : null

  const eat = (food) => {
    context.pet.action = 'eat'

    emitAfter({
      state: context,
      identifier: 'food:eaten',
      delay: 1000,
      emit: emit
    }, () => {
      context.pet.action = null
    })
  }

  if (food) {
    eat(food)

    const coordinates = getFoodPosition(context)
    const translation = `${coordinates.x}px, ${coordinates.y}px`

    return html`
      <div class="food bread">
        <img src="${food.image}"
             alt="Bread"
             style="transform: translate(${translation})" />
      </div>
    `
  } else {
    return html`<div class="food"></div>`
  }
}
