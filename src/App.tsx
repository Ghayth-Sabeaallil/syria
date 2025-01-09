import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('./Pages/Home'))
const State = lazy(() => import('./Pages/State'))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/state" Component={State} />
      </Routes>
    </Router>
  );
}

export default App;