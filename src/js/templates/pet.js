import html from 'choo/html'

import { Meat } from '../food'

export const render = (context, emit) => {
  const pet = context.pet

  const feed = () => {
    emit('pet:feed', { meal: new Meat() })
  }

  const poo = () => {
    emit('pet:poo')
  }

  return html`
    <div class="container">
      <p>Name: ${pet.name}</p>
      <p>Age: ${pet.age}</p>
      <p>Sex: ${pet.sex}</p>
      <p>Is hungry? ${pet.isHungry()}</p>
      <div>
        <progress value="${pet.hungerLevel}" max="100">
          ${pet.hungerLevel}
        </progress>
      </div>
      <p>
        <button type="button" onclick=${feed}>
          Feed
        </button>
        <button type="button" onclick=${poo}>
          Poo
        </button>
      </p>
      <img src="${pet.avatar.image}" alt="hatching" />
    </div>
  `
}
