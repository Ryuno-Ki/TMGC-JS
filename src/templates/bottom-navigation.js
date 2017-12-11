import html from 'choo/html'

import fontawesome from '@fortawesome/fontawesome'
import {
  faComment,
  faCog,
  faMedkit,
  faMoon
} from '@fortawesome/fontawesome-free-solid'
import '../css/navigation.css'

import { string2svg } from './utils/string2svg'

export const render = (context, emitter) => {
  const commentIcon = string2svg(fontawesome.icon(faComment).html[0])
  const gearIcon = string2svg(fontawesome.icon(faCog).html[0])
  const medkitIcon = string2svg(fontawesome.icon(faMedkit).html[0])
  const moonIcon = string2svg(fontawesome.icon(faMoon).html[0])

  return html`
    <div class="bottom navigation">
      <ul class="menu">
        <li class="menu-item">
          ${commentIcon}
        </li>
        <li class="menu-item">
          ${medkitIcon}
        </li>
        <li class="menu-item">
          ${moonIcon}
        </li>
        <li class="menu-item">
          ${gearIcon}
        </li>
      </ul>
    </div>
  `
}
