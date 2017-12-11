import html from 'choo/html'

export const render = (context, emit) => {
  const pet = context.pet

  return html`
    <div class="navigation-item stats">
      <p>Name: ${pet.name}</p>
      <p>Level: ${pet.level}</p>
      <p>Sex: ${pet.sex}</p>
    </div>
 `
}
