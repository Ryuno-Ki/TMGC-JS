import html from 'choo/html'

import { render as renderAnimal } from './pet'
import { render as renderFood } from './food'

export const render = (context, emitter) => {
  return html`
    <div class="screen">
      ${renderFood(context, emitter)}
      ${renderAnimal(context, emitter)}
    </div>
  `
}
