import html from 'choo/html'

import { growTimes } from '../../js/pet'
import { getPetPosition } from '../../js/utils/position'

export const render = (context, emit) => {
  const pet = context.pet

  const grow = () => {
    const level = pet.level
    const delay = growTimes[level]

    const identifier = 'pet:grow'
    const oldHandler = context.timeoutHandlers[ identifier ]
    if (oldHandler) { clearTimeout(oldHandler) }

    const handler = setTimeout(() => {
      pet.grow()
      emit(identifier)
    }, delay)
    context.timeoutHandlers[ identifier ] = handler
  }

  const poo = () => {
    const delay = Math.floor(10 * 1000 * Math.random())
    const identifier = 'pet:poo'
    const oldHandler = context.timeoutHandlers[ identifier ]
    if (oldHandler) { clearTimeout(oldHandler) }

    const handler = setTimeout(() => {
      emit(identifier)
    }, delay)
    context.timeoutHandlers[ identifier ] = handler
  }

  const bored = () => {
    const delay = Math.floor(5 * 1000 * Math.random())
    const identifier = 'pet:bored'
    const oldHandler = context.timeoutHandlers[ identifier ]
    if (oldHandler) { clearTimeout(oldHandler) }

    const handler = setTimeout(() => {
      emit(identifier)
    }, delay)
    context.timeoutHandlers[ identifier ] = handler
  }

  grow()
  poo()
  bored()

  const coordinates = getPetPosition(context)
  const translation = `${coordinates.x}px, ${coordinates.y}px`

  return html`
    <div class="pet">
      <img src="${pet.avatar.image}"
           alt="hatching"
           style="transform: translate(${translation})" />
    </div>
  `
}
