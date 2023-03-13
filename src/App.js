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
import Dashboard from './components/Dashboard/Dashboard';
import CreateExercise from './components/Exercises/CreateExercise/CreateExercise';

function App() {
  return (
    <section id='body'>
    <Header/>
    <main id='main'>
      <Routes >
          {/* <<< ------ Core ------- >>>*/}        
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>

          {/* <<< ------ Auth ------- >>>*/}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

          {/* <<< ------ Exercises------- >>> */}
        <Route path='/all-exercises' element={<AllExercises />} />
        <Route path='/create-exercise' element={<CreateExercise />}/>
        <Route path='/exercise/:id' element={<AllExercises />} />
        <Route path='/edit-exercise/:id' element={<CreateExercise />}/>


          {/* <<< ------ Activities------- >>> */}
        <Route path='/all-activities' element={<AllActivities />} />  

          {/* <<< ------ Errors------- >>> */}
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </main>
    <Footer />
  </section>
  );
}

export default App;
