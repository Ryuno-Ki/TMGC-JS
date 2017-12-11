import html from 'choo/html'

export const render = (context, emit) => {
  const food = context.food

  const eat = (food) => {
    const identifier = 'food:aten'
    const oldHandler = context.timeoutHandlers[ identifier ]
    if (oldHandler) { clearTimeout(oldHandler) }

    const handler = setTimeout(() => {
      emit(identifier)
    }, 1000)
    context.timeoutHandlers[ identifier ] = handler
  }

  if (food) {
    eat(food)
    return html`
      <div class="food meat">
        <img src="${food.image}" alt="Meat" />
      </div>
    `
  } else {
    return html`<div class="food"></div>`
  }
}
