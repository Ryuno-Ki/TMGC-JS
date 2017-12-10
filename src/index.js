import choo from 'choo';
import html from 'choo/html';

const app = choo();

const main = () => {
  return html`<div>Tamagotchi</div>`;
};

app.route('/', main);

const tree = app.start();
document.body.appendChild(tree);
