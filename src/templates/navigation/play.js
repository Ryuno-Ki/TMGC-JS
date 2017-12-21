import html from 'choo/html'

export const render = (context, emit) => {
  const pet = context.pet

  const play = () => {
    emit('pet:play')
  }

  return html`
    <div class="navigation-item life">
      <p>Happiness:</p>
      <progress value="${pet.happinessLevel}" max="100">
        ${pet.happinessLevel}
      </progress>

      <button type="button" onclick="${play}">
        Play
      </button>
    </div>
  `
}
