import styles from './Contacts.module.css'
import React, { useState } from 'react'

function Contacts() {

    const [formData, setFormData] = useState({
                                            email: null,
                                            name: null,
                                            message: null,                                            
    })

    return (
        <section className={styles.contacts}>
            <div className={`${styles.hero}`}>

            <div className={`${styles.banner}`}>
                <img src={'/images/backgrounds/background-02.jpg'} alt=''></img>
            </div>

            <div className={styles.form_box}>
                <h1>CONTACTS</h1>
                    <form className={`${styles.form}`}>
                        <div className={`${styles.field_box} ${styles.field_1}`}>
                            <label>Email</label>
                            <input id={'email'} type={'email'} ></input>
                        </div>

                        <div className={`${styles.field_box} ${styles.field_2}`}>
                            <label>Name</label>
                            <input id={'name'} type={'text'}></input>
                        </div>

                        <div className={`${styles.field_box} ${styles.field_3}`}>
                            <label></label>
                            <textarea id={'message'}></textarea>
                        </div>

                        <button className={`${styles.field_box} ${styles.field_4}`}>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacts
