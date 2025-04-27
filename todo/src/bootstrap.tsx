// src/bootstrap.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoApp from './TodoApp';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<TodoApp />);
}