import html from 'choo/html'

import { Poo } from '../../js/poo'
import { getPooPosition } from '../../js/utils/position'

export const render = (context, emit) => {
  const poo = context.poo ? new Poo() : null

  if (poo) {
    const coordinates = getPooPosition(context)
    const translation = `${coordinates.x}px, ${coordinates.y}px`

    return html`
      <div class="poo">
        <img src="${poo.image}"
             alt="Poo"
             style="transform: translate(${translation})" />
      </div>
    `
  } else {
    return html`<div class="poo"></div>`
  }
}
