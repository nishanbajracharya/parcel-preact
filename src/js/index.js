import { h, render } from 'preact';

import '../css/style.css';

render(
  <div id="foo">
    <span>Hello, world!</span>
    <button onClick={e => alert('hi!')}>Click Me</button>
  </div>,
  document.getElementById('app')
);
