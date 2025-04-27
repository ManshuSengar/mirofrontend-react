// src/bootstrap.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import LandingPage from './LandingPage';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<LandingPage />);
}