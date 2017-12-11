import html from 'choo/html'

import { render as renderNavigationItemLife } from './life'
import { render as renderNavigationItemStats } from './stats'

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
