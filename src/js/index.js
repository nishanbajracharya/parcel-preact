import preact from 'preact';

import 'normalize.css';
import '../css/style.css';

import App from './app';

const wrapper = document.getElementById('app');

preact.render(
  <App />,
  wrapper,
  wrapper.lastChild
);
