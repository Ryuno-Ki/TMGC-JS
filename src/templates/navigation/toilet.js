import html from 'choo/html'

export const render = (context, emit) => {
  const cleanup = () => {
    emit('pet:cleaned')
  }

  return html`
    <div class="navigation-item toilet">
      <button type="button" onclick="${cleanup}">Clean up</button>
    </div>
 `
}
