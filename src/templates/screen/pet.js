import html from 'choo/html'

import { growTimes } from '../../js/pet'

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
      emit('pet:poo')
    }, delay)
    context.timeoutHandlers[ identifier ] = handler
  }

  grow()
  poo()

  const canvasWidth = context.canvasWidth
  const translationX = canvasWidth * pet.avatar.x / 100
  const translationY = canvasWidth * pet.avatar.y / 100
  const translation = `${translationX}px, ${translationY}px`

  return html`
    <div class="pet">
      <img src="${pet.avatar.image}"
           alt="hatching"
           style="transform: translate(${translation})" />
    </div>
  `
}
