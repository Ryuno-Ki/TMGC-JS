import html from 'choo/html'

import '../css/game.css'

import { render as renderBottomNavigation } from './bottom-navigation'
import { render as renderTopNavigation } from './top-navigation'
import { render as renderScreen } from './screen'

export const render = (context, emitter) => {
  return html`
    <div class="app">
      ${renderTopNavigation(context, emitter)}
      ${renderBottomNavigation(context, emitter)}
      ${renderScreen(context, emitter)}
    </div>
  `
}
