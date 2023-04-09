import { useState, React, useContext } from 'react';
import styles from '../AuthForm/AuthForm.module.css'
import { loginService, registerService } from '../../../api/auth'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import { setUserData } from '../../../utils/userUtils';


function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const navigate = useNavigate()
    const {setUser,  setLoggedIn} = useContext(UserContext)
    const [formError, setFormError] = useState(false)


    const onRegister = (e) => {
        e.preventDefault()
        if (password === repass && !(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) {
            registerService(email, password)
            .then(() => {
                    loginService(email, password)
                        .then((res) => {
                            setUser({...res, isAuthenticated: true})
                            setLoggedIn(true)
                            setUserData(res)
                            navigate('/dashboard');
                        })
                })
            .catch((res) => {navigate('/register')})
          } else {
            setFormError('Credentials are wrong format.')
            navigate('/register')
          }

    }
    const onEmailChange = (e) => {
        e.preventDefault()
        if (!e.target.value) {
            setFormError('All Fields Are Required!')
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{0,4}$/i.test(email)) {
            setFormError('Invalid Email Format.')
          } else {
            setFormError('')
          }
        
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        e.preventDefault()
        
        setPassword(e.target.value)
        
    }
    const onRepassChange = (e) => {
        e.preventDefault()
        setRepass(e.target.value)
    }

    // TODO ADD FORM VALIDAITONS

    return (
    <section className={styles.auth_section}>
      <div className={styles.form_box}>
        <h1>REGISTER</h1>
        <form onSubmit={onRegister} className={styles.form}>
        {formError.length > 0 ?
                         <span className={`${styles.form_error}`}>
                            {formError}
                          </span> 
                        : null}
            <label>Email</label>
            <input 
                value={email}
                id='email'
                onChange={onEmailChange}
                name='email' type={'email'}
                className={styles.email_input} />
            <label>Password</label>
            <input 
                value={password}
                onChange={onPasswordChange}
                name='password'
                type={'password'}
                className={styles.pass_input} />
            <label>Repeat Password</label>
            <input 
                value={repass}
                onChange={onRepassChange}
                name='repass'
                type={'password'}
                className={styles.repass_input} />
            <button     
                className={styles.button} 
                type='submit' >Register</button>
        </form>
      </div>
    </section>
  )
}

export default Register
