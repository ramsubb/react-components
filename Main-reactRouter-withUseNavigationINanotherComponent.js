// Main.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Home'));

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
      </Routes>
    </Router>
  );
}

export default Main;

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Example of programmatically navigating somewhere after some time
    const timer = setTimeout(() => {
      navigate('/about');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;