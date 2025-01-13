import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('./Pages/Home'))
const SyriaMap = lazy(() => import('./Pages/SyriaMap'))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/discover" Component={SyriaMap} />
      </Routes>
    </Router>
  );
}

export default App;