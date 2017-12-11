import html from 'choo/html'

import { render as renderTopNavigation } from './top-navigation'
import { render as renderScreen } from './screen'

export const render = (context, emitter) => {
  return html`
    <div class="app">
      ${renderTopNavigation(context, emitter)}
      ${renderScreen(context, emitter)}
    </div>
  `
}
