import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Use lazy loading for remote components
const TodoApp = lazy(() => import('todo/TodoApp'));
const LandingPage = lazy(() => import('landing/LandingPage'));

// Create a fallback component with better error handling
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Error loading remote module:', event);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div>Error loading module. Please try again later.</div>;
  }

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '20px', backgroundColor: '#f5f5f5', marginBottom: '20px' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo">Todo App</Link></li>
            <li><Link to="/landing">Landing Page</Link></li>
          </ul>
        </nav>
        
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<h1>Home Page</h1>} />
              <Route path="/todo" element={<TodoApp />} />
              <Route path="/landing" element={<LandingPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;