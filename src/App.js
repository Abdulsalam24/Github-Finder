import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AlertProvider } from './context/alertContext/AlertContext';
import { GithubProvider } from './context/githubContext/GithubContext';
import Footer from './layout/Footer';
import Main from './layout/Main';
import Nav from './layout/Nav';
import About from './page/About';
import NotFound from './page/NotFound';
import User from './page/User';



function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="app">
            <Nav />
            <Routes>
              <Route exact path='/' element={<Main />} />
              <Route exact path='/user/:login' element={<User />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/notfound' element={<NotFound />} />
              <Route exact path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
