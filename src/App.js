import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Main/Header/Header.js'
import Footer from './components/Main/Footer/Footer'
import Home from './components/Home/Home';

function App() {
  return (
    <section id='body'>
    <Header/>
    <main>
      <Routes >
        <Route path='/' element={<Home />}/>
      </Routes>
    </main>
    <Footer />
  </section>
  );
}

export default App;
