import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
/*const About = lazy(() => import('./Pages/About'))
const Contact = lazy(() => import('./Pages/Contact'))
const Home = lazy(() => import('./Pages/Home'))
const Login = lazy(() => import('./Pages/Login'))
const Signup = lazy(() => import('./Pages/SignUp'))
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy'))
const Dash = lazy(() => import('./Pages/Dash'))
const Forget = lazy(() => import('./Pages/Forget'))*/

function App() {
  return (
    <Router>
      <Routes>
        {/*
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/contact" Component={Contact} />
                <Route path="/login" Component={Login} />
                <Route path="/signup" Component={Signup} />
                <Route path="/privacypolicy" Component={PrivacyPolicy} />
                <Route path="/dash" Component={Dash} />
                <Route path="/forget" Component={Forget} />
          */}
      </Routes>
    </Router>
  );
}

export default App;