import html from 'choo/html'

import { growTimes } from '../pet'

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

  const x = Math.floor(Math.random() * 80) + '%'
  const y = Math.floor(Math.random() * 80) + '%'

  return html`
    <div class="pet">
      <img src="${pet.avatar.image}"
           alt="hatching"
           style="top: ${x}; left: ${y}" />
    </div>
  `
}
