import join from 'lodash/join';

function component() {
  const element = document.createElement('div');
  element.innerHTML = join(['Hello', 'World'], '');
  return element;
}

document.body.appendChild(component());
