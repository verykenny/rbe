import './App.css';
import About from './pages/AboutUs'
import Home from './pages/Home'
import Nav from './components/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home />
      <About /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
