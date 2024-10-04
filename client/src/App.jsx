import { BrowserRouter , Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/" element={<Home />} />

  </Routes>
  </BrowserRouter>
}
