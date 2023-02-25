import './App.css';
import styled from 'styled-components'
import Home from './pages/Home'
import About from './pages/AboutUs'
import Questions from './pages/Questions'
import Blogs from './pages/Blogs'
import Nav from './components/NavBar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <AppContainer className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Questions />} />
        <Route path="/articles" element={<Blogs />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;
