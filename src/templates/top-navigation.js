import html from 'choo/html'

import fontawesome from '@fortawesome/fontawesome'
import {
  faGamepad,
  faTachometerAlt,
  faTint,
  faUtensils
} from '@fortawesome/fontawesome-free-solid'
import '../css/navigation.css'

import { string2svg } from './utils/string2svg'
import { render as renderNavigationItemLife } from './navigation/life'
import { render as renderNavigationItemStats } from './navigation/stats'

export const render = (context, emitter) => {
  const cutleryIcon = string2svg(fontawesome.icon(faUtensils).html[0])
  const dashboardIcon = string2svg(fontawesome.icon(faTachometerAlt).html[0])
  const gamepadIcon = string2svg(fontawesome.icon(faGamepad).html[0])
  const tintIcon = string2svg(fontawesome.icon(faTint).html[0])

  return html`
    <div class="top navigation">
      <ul class="menu">
        <li class="menu-item">
          ${dashboardIcon}
          <ul class="sub-menu">
            <li>${renderNavigationItemStats(context, emitter)}</li>
          </ul>
        </li>
        <li class="menu-item">
          ${cutleryIcon}
          <ul class="sub-menu">
            <li>${renderNavigationItemLife(context, emitter)}</li>
          </ul>
        </li>
        <li class="menu-item">
          ${tintIcon}
        </li>
        <li class="menu-item">
          ${gamepadIcon}
        </li>
      </ul>
    </div>
  `
}
