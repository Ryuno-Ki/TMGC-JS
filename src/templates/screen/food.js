import html from 'choo/html'

import { Bread } from '../../js/food'
import { getFoodPosition } from '../../js/utils/position'

export const render = (context, emit) => {
  const food = context.food ? new Bread() : null

  const eat = (food) => {
    context.pet.eat(food)
    const identifier = 'food:eaten'
    const oldHandler = context.timeoutHandlers[ identifier ]
    if (oldHandler) { clearTimeout(oldHandler) }

    const handler = setTimeout(() => {
      emit(identifier)
    }, 3000)
    context.timeoutHandlers[ identifier ] = handler
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
