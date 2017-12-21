import html from 'choo/html'

export const render = (context, emit) => {
  const pet = context.pet

  const feed = () => {
    emit('pet:feed', { type: 'bread' })
  }

  return html`
    <div class="navigation-item life">
      <p>Hunger:</p>
      <progress value="${pet.hungerLevel}" max="100">
        ${pet.hungerLevel}
      </progress>

      <button type="button" onclick="${feed}">
        Feed bread
      </button>
    </div>
  `
}
