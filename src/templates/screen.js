import html from 'choo/html'

import '../css/canvas.css'

import { render as renderFood } from './screen/food'
import { render as renderAnimal } from './screen/pet'

export const render = (context, emitter) => {
  const canvasWidth = context.canvasWidth

  return html`
    <div class="screen" style="min-width: ${canvasWidth}px">
      ${renderFood(context, emitter)}
      ${renderAnimal(context, emitter)}
    </div>
  `
}
