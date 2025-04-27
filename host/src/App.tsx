import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const TodoApp = React.lazy(() => import('todo/TodoApp'));
const LandingPage = React.lazy(() => import('landing/LandingPage'));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo">Todo App</Link></li>
            <li><Link to="/landing">Landing Page</Link></li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/todo" element={<TodoApp />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;