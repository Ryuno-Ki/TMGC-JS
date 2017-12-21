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
import { render as renderNavigationItemToilet } from './navigation/toilet'
import { render as renderNavigationItemPlay } from './navigation/play'

export const render = (context, emitter) => {
  const cutleryIcon = string2svg(
    fontawesome.icon(faUtensils, {
      classes: [ 'fa-2x' ]
    }).html[0])
  const dashboardIcon = string2svg(
    fontawesome.icon(faTachometerAlt, {
      classes: [ 'fa-2x' ]
    }).html[0])
  const gamepadIcon = string2svg(
    fontawesome.icon(faGamepad, {
      classes: [ 'fa-2x' ]
    }).html[0])
  const tintIcon = string2svg(
    fontawesome.icon(faTint, {
      classes: [ 'fa-2x' ]
    }).html[0])
  const nav = context.query.nav

  return html`
    <div class="top navigation">
      <ul class="menu">
        <li class="menu-item${nav === 'stats' ? ' active' : ''}">
          <a href="./?nav=stats">
            ${dashboardIcon}
          </a>
          <ul class="sub-menu">
            <li>${renderNavigationItemStats(context, emitter)}</li>
          </ul>
        </li>
        <li class="menu-item${nav === 'feed' ? ' active' : ''}">
          <a href="./?nav=feed">
            ${cutleryIcon}
          </a>
          <ul class="sub-menu">
            <li>${renderNavigationItemLife(context, emitter)}</li>
          </ul>
        </li>
        <li class="menu-item${nav === 'toilet' ? ' active' : ''}">
          <a href="./?nav=toilet">
            ${tintIcon}
          </a>
          <ul class="sub-menu">
            <li>${renderNavigationItemToilet(context, emitter)}</li>
          </ul>
        </li>
        <li class="menu-item${nav === 'play' ? ' active' : ''}">
          <a href="./?nav=play">
            ${gamepadIcon}
          </a>
          <ul class="sub-menu">
            <li>${renderNavigationItemPlay(context, emitter)}</li>
          </ul>
        </li>
      </ul>
    </div>
  `
}
