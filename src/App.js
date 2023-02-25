import './App.css';
import Home from './pages/Home'
import About from './pages/AboutUs'
import Questions from './pages/Questions'
import Blogs from './pages/Blogs'
import Nav from './components/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Questions />} />
        <Route path="/articles" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
