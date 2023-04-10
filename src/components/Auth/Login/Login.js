import { useState, React, useContext } from 'react';
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
    const [formError, setFormError] = useState(false)

    // TODO ADD FORM VALIDAITONS

    const onLogin = (e) => {
        e.preventDefault()
                loginService(email, password)
                    .then((res) => {
                        setUser({...res, isAuthenticated: true})
                        setLoggedIn(true)
                        setUserData({...res, isAuthenticated: true})
                        console.log(getUserData(), 'user in onlogin')
                        navigate('/');
                    })
                    .catch((res) => {
                        setUserData(user)
                        setFormError(true)
                        navigate('/login')
                        console.log('in onLogin error catch', res)
                      })
    }
    const onEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        e.preventDefault()
            setPassword(e.target.value)
    }

    return (
    <section className={styles.auth_section}>
      <div className={styles.form_box}>
        <h1>LOGIN</h1>
        <form onSubmit={onLogin} className={styles.form}>
            {formError ?
                         <span className={`${styles.form_error}`}>
                            Wrong Credentials Provided!
                          </span> 
                        : null}
            <label>Email</label>
            <input 
                value={email}   
                id='email'
                onChange={onEmailChange}
                name='email'
                type={'email'} className={styles.email_input} 
                placeholder='enter your email' />
            <label>Password</label>
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
