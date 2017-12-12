import html from 'choo/html'

import '../css/canvas.css'

import { render as renderFood } from './screen/food'
import { render as renderAnimal } from './screen/pet'
import { render as renderPoo } from './screen/poo'

export const render = (context, emitter) => {
  const canvasWidth = context.canvasWidth

  const collapseNavigation = () => {
    emitter('pushState', '/')
  }

  return html`
    <div class="screen"
         style="min-width: ${canvasWidth}px"
         onclick="${collapseNavigation}">
      ${renderFood(context, emitter)}
      ${renderPoo(context, emitter)}
      ${renderAnimal(context, emitter)}
    </div>
  `
}
