import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import NavBar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';

import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education'


function App() {

  return (
    <Router>
    <NavBar/>
    <main className={`main min-h-screen`}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/education' element={<Education/>}/>
      </Routes>
    </main>
      <Footer/>
    </Router>
  )
}

export default App;
