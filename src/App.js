import './App.css';
import './reset.css'
import { Route, Routes } from 'react-router-dom';

import Header from './components/Main/Header/Header.js'
import Footer from './components/Main/Footer/Footer'
import Home from './components/Home/Home';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import Error404 from './components/Errors/Error404';
import AllExercises from './components/Exercises/AllExercises/AllExercises';
import AllActivities from './components/Activities/AllActivities/AllActivities';

function App() {
  return (
    <section id='body'>
    <Header/>
    <main id='main'>
      <Routes >
        <Route path='*' element={<Error404 />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/all-exercises' element={<AllExercises />} />
        <Route path='/all-activities' element={<AllActivities />} />

      </Routes>
    </main>
    <Footer />
  </section>
  );
}

export default App;
