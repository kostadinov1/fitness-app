import styles from './Login.module.css'
import React from 'react'

function Login() {
  return (
    <section className={styles.login}>
      <div className={styles.form_box}>
        <h1>Login</h1>
        <form onSubmit={''} className={styles.form}>
            <label>Email</label>
            <input name='email' type={'email'} className={styles.email_input}></input>
            <label>Password</label>
            <input name='password' type={'password'} className={styles.pass_input}></input>

            <button type='submit'>Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login
