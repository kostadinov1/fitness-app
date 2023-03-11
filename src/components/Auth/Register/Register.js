import { useState, React } from 'react';
import styles from './Register.module.css'
import { registerService } from '../../../api/auth'


function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');


    const onRegister = (e) => {
        e.preventDefault()
        console.log(email, password);
        if (password === repass) {
          registerService(email, password)
        } else {
          alert('Passwords Do Not Match!')
        }
    }
    const onEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.velue)
        console.log(email)

    }
    const onPasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
        console.log(password)
        
    }
    const onRepassChange = (e) => {
        e.preventDefault(e.target.value)
        setRepass(e.target.value)
        console.log(repass)
        
    }

    return (
    <section className={styles.register}>
      <div className={styles.form_box}>
        <h1>Register Here</h1>
        <form onSubmit={onRegister} className={styles.form}>
            <label>Email</label>
            <input value={email} onChange={onEmailChange} name='email' type={'email'} className={styles.email_input}></input>
            <label>Password</label>
            <input value={password} onChange={onPasswordChange} name='password' type={'password'} className={styles.pass_input}></input>
            <label>Repeat Password</label>
            <input value={repass} onChange={onRepassChange} name='repass' type={'password'} className={styles.repass_input}></input>
            <button type='submit' >Register</button>
        </form>
      </div>
    </section>
  )
}

export default Register
