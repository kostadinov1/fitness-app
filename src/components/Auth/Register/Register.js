import { useState, React, useContext } from 'react';
import styles from '../AuthForm/AuthForm.module.css'
import { loginService, registerService } from '../../../api/auth'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';


function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)


    const onRegister = (e) => {
        e.preventDefault()
        if (password === repass) {
            registerService(email, password)
            .then((res) => {
                    setUser(res)
                    loginService(email, password)})
                    navigate('/')
            .catch((res) => {
                console.log('__reger_catch__', res);})
          } else {
            alert('Passwords DO NOT MATCH!')
          }
    }
    const onEmailChange = (e) => {
        e.preventDefault()
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


    return (
    <section className={styles.auth_section}>
      <div className={styles.form_box}>
        <h1>REGISTER</h1>
        <form onSubmit={onRegister} className={styles.form}>
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
