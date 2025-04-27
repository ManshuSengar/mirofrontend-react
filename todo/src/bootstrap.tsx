import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoApp from './TodoApp';

const mount = (el: HTMLElement) => {
  const root = createRoot(el);
  root.render(<TodoApp />);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };