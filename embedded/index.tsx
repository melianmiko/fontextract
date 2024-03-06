import { render } from 'preact';
import { FontExtractApp } from '../src/FontExtractApp';

const appRoot = document.getElementById('app');
if (appRoot == null) {
  throw new Error("Can't find id='app' block");
}

render(<FontExtractApp />, appRoot);
