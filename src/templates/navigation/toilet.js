import html from 'choo/html'

export const render = (context, emit) => {
  const cleanup = () => {
    context.toilet = true
    emit('pet:clean')
  }

  return html`
    <div class="navigation-item toilet">
      <button type="button" onclick="${cleanup}">Clean up</button>
    </div>
 `
}
