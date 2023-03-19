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
import EditExercise from './components/Exercises/EditExercise/EditExercise';
import CreateActivity from './components/Activities/CreateActivity/CreateActivity';
import EditActivity from './components/Activities/EditActivity/EditActivity';
import Activity from './components/Activities/Activity/Activity';
import ExerciseCard from './components/Exercises/Exercise/Exercise';

import { UserContext } from './contexts/UserContext';
import { useState } from 'react';

function App() {

    const [user, setUser] = useState({
        user_id: null,
        token: null,
        email: null,
        isAuthenticated: false,
    })
       

    return (
        <UserContext.Provider value={{user, setUser}}>
            <section id='body'>
                <Header/>
                    <main id='main'>
                        <Routes >
                            {/* <<< ------ Core ------- >>>*/}        
                        <Route path='/' element={<Home />}/>
                        
                        {user.isAuthenticated === true ?
                        <>{/* <<< ------ Core ------- >>>*/}        
                            <Route path='/dashboard' element={<Dashboard />}/>

                            {/* <<< ------ Exercises------- >>> */}
                            <Route path='/all-exercises' element={<AllExercises />} />
                            <Route path='/create-exercise' element={<CreateExercise />}/>
                            <Route path='/exercise/:id' element={<ExerciseCard />} />
                            <Route path='/edit-exercise/:id' element={<EditExercise />}/>

                                {/* <<< ------ Activities------- >>> */}
                            <Route path='/all-activities' element={<AllActivities />} />  
                            <Route path='/create-activity' element={<CreateActivity />}/>
                            <Route path='/activity/:id' element={<Activity />} />
                            <Route path='/edit-activity/:id' element={<EditActivity />}/>
                        </>
                            :null}

                            {/* <<< ------ Auth ------- >>>*/}
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />,


                            {/* <<< ------ Errors------- >>> */}
                        <Route path='*' element={<Error404 />}/>
                        </Routes>
                    </main>
                <Footer />
            </section>
        </UserContext.Provider>
    );
    }

export default App;
