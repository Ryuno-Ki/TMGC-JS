import html from 'choo/html'

import { growTimes } from '../../js/pet'
import { emitAfter } from '../../js/utils/emitter'
import { getPetPosition } from '../../js/utils/position'

export const render = (context, emit) => {
  const pet = context.pet

  const grow = () => {
    emitAfter({
      state: context,
      identifier: 'pet:grow',
      delay: growTimes[ pet.level ],
      emit: emit
    }, pet.grow.bind(pet))
  }

  const poo = () => {
    emitAfter({
      state: context,
      identifier: 'pet:poo',
      delay: Math.floor(10 * 1000 * Math.random()),
      emit: emit
    })
  }

  const bored = () => {
    emitAfter({
      state: context,
      identifier: 'pet:bored',
      delay: Math.floor(5 * 1000 * Math.random()),
      emit: emit
    })
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
