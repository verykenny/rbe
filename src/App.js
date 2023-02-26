import styled from 'styled-components'
import Home from './pages/Home'
import About from './pages/AboutUs'
import Questions from './pages/Questions'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'
import Nav from './components/NavBar'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <AppContainer className="App">
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Questions />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
        </Routes>
      </div>
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  position: relative;
`;
