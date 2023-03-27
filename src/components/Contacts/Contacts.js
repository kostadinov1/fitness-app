import styles from './Contacts.module.css'
import React, { useEffect, useState } from 'react'
import { createContactMessage } from '../../api/contactMessage'

function Contacts() {

    const [formData, setFormData] = useState({
                                            email: undefined,
                                            title: undefined,
                                            message: undefined,                                            
    })


    const onValueChange = (e) => {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))

    }

    const onSend  = (e) => {
        e.preventDefault()
        console.log('formData in onsend', formData)
        createContactMessage(formData)
            .then((res) => {
                
                console.log('res in onsend', res);
            })
            .catch((res) => {
                console.log('res in ERRORonsend', res);
            })    
    }

    return (
        <section className={styles.contacts}>
            <div className={`${styles.hero}`}>

            <div className={`${styles.banner}`}>
                <img src={'/images/backgrounds/background-02.jpg'} alt=''></img>
            </div>

            <div className={styles.form_box}>

                    <form onSubmit={onSend} className={`${styles.form}`}>

                    <div className={`${styles.field_box} ${styles.field_5} ${'title_outlined'}`}>
                        Contacts
                        </div>

                        <div className={`${styles.field_box} ${styles.field_1}`}>
                            <label htmlFor='email'>Email</label>
                            <input
                                name='email' 
                                value={formData.email}
                                onChange={onValueChange}
                                id={'email'}
                                type={'email'} 
                                placeholder={'enter your email'}></input>
                        </div>

                        <div className={`${styles.field_box} ${styles.field_2}`}>
                            <label htmlFor='title'>Title</label>
                            <input 
                                name='title' 
                                value={formData.title}
                                onChange={onValueChange}
                                id={'title'} type={'text'}
                                placeholder={'enter title of message'}></input>
                        </div>

                        <div className={`${styles.field_box} ${styles.field_3}`}>
                            <textarea      
                                name='message' 
                                value={formData.message}
                                onChange={onValueChange}
                                id={'message'} 
                                placeholder={'Enter Your Message Here'}
                                ></textarea>
                        </div>

                        <button className={`${styles.field_box} ${styles.field_4}`}>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacts
