import choo from 'choo'
// import expose from 'choo-devtools'

import { Pet } from './js/pet'
import { render as main } from './templates/game'

const app = choo()
// app.use(expose)

app.use((state, emitter) => {
  state.canvasWidth = 300
  state.food = null
  state.pet = new Pet()
  state.timeoutHandlers = {}

  emitter.on('food:eaten', () => {
    state.food = null
    emitter.emit('render')
  })

  emitter.on('pet:feed', (event) => {
    state.food = event.type
    emitter.emit('render')
  })

  emitter.on('pet:grow', () => {
    emitter.emit('render')
  })

  emitter.on('pet:poo', () => {
    state.pet.poo()
    emitter.emit('render')
  })
})
app.route('/', main)
const tree = app.start()
document.body.appendChild(tree)
