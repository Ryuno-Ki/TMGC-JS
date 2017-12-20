import html from 'choo/html'

import '../../css/toilet.css'

import { Toilet } from '../../js/toilet'
import { getToiletPosition } from '../../js/utils/position'

export const render = (context, emit) => {
  const toilet = context.toilet ? new Toilet() : null

  const cleanup = () => {
    emit('pet:cleaned')
  }

  if (toilet) {
    const coordinates = getToiletPosition(context)
    const translation = `${coordinates.x}px, ${coordinates.y}px`
    const animation = [
      'animation-name: slide-left',
      'animation-duration: 1.5s',
      'animation-timing-function: linear'
    ].join(';')

    cleanup()
    return html`
      <div class="toilet">
        <img src="${toilet.image}"
             alt="Toilet"
             style="transform: translate(${translation}); ${animation}" />
      </div>
    `
  } else {
    return html`<div class="toilet"></div>`
  }
}
