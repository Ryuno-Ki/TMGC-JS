import html from 'choo/html';

import { render as renderAnimal } from './pet';

export const render = (context, emitter) => {
  const pet = context.pet;
  return html`${renderAnimal({ pet }, emitter)}`;
};
