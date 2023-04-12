import { Field } from 'rc-field-form';
import { useState, React, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../../../api/auth';
import { UserContext } from '../../../contexts/UserContext';
import { getUserData, setUserData } from '../../../utils/userUtils';
import styles from '../AuthForm/AuthForm.module.css'


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser, loggedIn, setLoggedIn }= useContext(UserContext)
    const [formErrors, setFormErrors] = useState({
        username: 'This field may not be blank.',
        password: 'This field may not be blank.'
    })

    const onLogin = (e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            setFormErrors({username: 'This field may not be blank.',
                           password: 'This field may not be blank.'})
        }
        
                loginService(email, password)
                    .then((res) => {
                        setUser({...res, isAuthenticated: true})
                        setLoggedIn(true)
                        setUserData({...res, isAuthenticated: true})
                        navigate('/');
                    })
                    .catch((res) => {
                        setUserData(user)
                        setFormErrors({response: 'Unable to log in with provided credentials'})
                        navigate('/login')
                      })
    }

    const onEmailChange = (e) => {
        e.preventDefault()
        if (formErrors.username) {
            setFormErrors((state) => ({...state, username: ''}))
        }
        if (e.target.value === '') {
            setFormErrors((state) => ({...state, username: 'This field may not be blank'}))
        }
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        e.preventDefault()
        if (formErrors.password) {
            setFormErrors((state) => ({...state, password: ''}))
        }
        if (e.target.value === '') {
            setFormErrors((state) => ({...state, password: 'This field may not be blank'}))
        }
        setPassword(e.target.value)
    }

    return (
    <section className={styles.auth_section}>
      <div className={styles.form_box}>
        <h1>LOGIN</h1>
        <form onSubmit={onLogin} className={styles.form}>
                        {formErrors ?
                         <span className={`${styles.form_error}`}>
                            {formErrors['response']}
                          </span> 
                        : null}
            <label>Email</label>
            {formErrors ?
                         <span className={`${styles.form_error}`}>
                            {formErrors['username']}
                          </span> 
                        : null}
            <input 
                value={email}   
                id='email'
                onChange={onEmailChange}
                name='email'
                type={'email'} className={styles.email_input} 
                placeholder='enter your email' />
            <label>Password</label>
            {formErrors ?
                         <span className={`${styles.form_error}`}>
                            {formErrors['password']}
                          </span> 
                        : null}
            <input 
                value={password}    
                onChange={onPasswordChange}
                name='password'
                type={'password'}
                className={styles.pass_input} 
                placeholder='enter your password' />
            <button className={styles.button} type='submit' >Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login
