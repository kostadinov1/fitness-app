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
    const [formErrors, setFormErrors] = useState({
        username: 'This field may not be blank.',
        password: 'This field may not be blank.',
        repass: 'This field may not be blank.'
    })

    const onRegister = (e) => {
        if (email === '' || password === '' || repass === '') {
            setFormErrors({username: 'This field may not be blank.',
                           password: 'This field may not be blank.'})
        }
        e.preventDefault()
        if (password !== repass) {
            setFormErrors((state) => ({...state, password: 'Passwords do not match.'}))  
        }
        try {
            registerService(email, password)
                .then(() => {
                    loginService(email, password)
                        .then((res) => {
                            setUser({...res, isAuthenticated: true})
                            setLoggedIn(true)
                            setUserData({...res, isAuthenticated: true})
                            navigate('/dashboard');
                        })
                    })
                .catch((res) => {
                    console.log(Object.keys(res), 'e11123rror in onRegiser catch')
                    Object.keys(res).map((errorName) => 
                                setFormErrors((state) => ({...state, error: res[errorName]}))  
                    )
                    })
          } catch(error) {
            console.log(error, 'error in onRegiser catch')
            Object.keys(error).map((errorName) => 
            setFormErrors((state) => ({...state, errorName: error[errorName]})))
            navigate('/register')
          }
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
        const onRepassChange = (e) => {
            e.preventDefault()
            if (formErrors.repass) {
                setFormErrors((state) => ({...state, repass: ''}))
            }
            if (e.target.value === '') {
                setFormErrors((state) => ({...state, repass: 'This field may not be blank'}))
            }
            setRepass(e.target.value)
    }

    // TODO ADD FORM VALIDAITONS

    return (
    <section className={styles.auth_section}>
      <div className={styles.form_box}>
        <h1>REGISTER</h1>
        <form onSubmit={onRegister} className={styles.form}>
        {formErrors ?   
                         <span className={`${styles.form_error}`}>
                            {formErrors.error}
                            {/* {Object.keys(formErrors).map((error) => <p>{error} {formErrors[error]}</p>)} */}
                          </span> 

                        : null}
            <label>Email</label>
            {formErrors.username ?
                         <span className={`${styles.form_error}`}>
                            {formErrors['username']}
                          </span> 
                        : null}
            <input 
                value={email}
                id='email'
                onChange={onEmailChange}
                name='email' type={'email'}
                className={styles.email_input} />
            <label>Password</label>
            {formErrors.password ?
                         <span className={`${styles.form_error}`}>
                            {formErrors['password']}
                          </span> 
                        : null}
            <input 
                value={password}
                onChange={onPasswordChange}
                name='password'
                type={'password'}
                className={styles.pass_input} />
            <label>Repeat Password</label>
            {formErrors.repass ?
                         <span className={`${styles.form_error}`}>
                            {formErrors['repass']}
                          </span> 
                        : null}
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
