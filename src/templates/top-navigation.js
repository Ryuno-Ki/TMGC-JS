import html from 'choo/html'

import { render as renderNavigationItemLife } from './navigation/life'
import { render as renderNavigationItemStats } from './navigation/stats'

export const render = (context, emitter) => {
  return html`
    <div class="menu top-navigation">
      <ul>
        <li>${renderNavigationItemStats(context, emitter)}</li>
        <li>${renderNavigationItemLife(context, emitter)}</li>
      </ul>
    </div>
  `
}
