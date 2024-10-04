import { BrowserRouter , Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Home from './pages/Home';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/" element={<Home />} />

  </Routes>
  </BrowserRouter>
}
