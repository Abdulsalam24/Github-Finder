import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GithubProvider } from './context/gihubContext/GithubContext';
import Footer from './layout/Footer';
import Main from './layout/Main';
import Nav from './layout/Nav';
import About from './page/About';



function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="app">
          <Nav />
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
