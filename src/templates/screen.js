import html from 'choo/html'

import '../css/canvas.css'

import { render as renderFood } from './screen/food'
import { render as renderGame } from './screen/game'
import { render as renderAnimal } from './screen/pet'
import { render as renderPoo } from './screen/poo'
import { render as renderToilet } from './screen/toilet'

export const render = (context, emitter) => {
  const canvasHeight = context.canvasHeight
  const canvasWidth = context.canvasWidth

  const collapseNavigation = () => {
    emitter('pushState', '/')
  }

  return html`
    <div class="screen"
         style="height: ${canvasHeight}px; width: ${canvasWidth}px"
         onclick="${collapseNavigation}">
      ${renderFood(context, emitter)}
      ${renderGame(context, emitter)}
      ${renderPoo(context, emitter)}
      ${renderToilet(context, emitter)}
      ${renderAnimal(context, emitter)}
    </div>
  `
}
