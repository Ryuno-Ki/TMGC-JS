import choo from 'choo'

import { Pet } from './js/pet'
import { render as main } from './js/templates/game'

const app = choo()
app.use((state, emitter) => {
  state.pet = new Pet('Guido')

  emitter.on('pet:feed', (event) => {
    state.pet.eat(event.meal)
    emitter.emit('render')
  })

  emitter.on('pet:poo', (event) => {
    state.pet.poo()
    emitter.emit('render')
  })
})
app.route('/', main)
const tree = app.start()
document.body.appendChild(tree)
