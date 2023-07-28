import styles from './Contacts.module.css'
import React, { useState } from 'react'
import { createContactMessage } from '../../api/contactMessage'
import SimpleMap from '../Custom/SimpleMap/SimpleMap'
import AboutUs from '../AboutUs/AboutUs'


function Contacts() {

    const [formData, setFormData] = useState({email: undefined,
                                              title: undefined,
                                              message: undefined,})

    const onValueChange = (e) => {
        setFormData((state) => ({...state, [e.target.name]: e.target.value}))}

    const onSend = (e) => {
        e.preventDefault()
        createContactMessage(formData)
            .then((res) => {})
            .catch((res) => {})    
    }

    return (
        <section className={styles.contacts}>
                        {/* <AboutUs /> */}
            <div className={`${styles.hero}`}>

            <div className={`${styles.banner}`}>

            {/* <SimpleMap></SimpleMap> */}
            </div>

            <div className={styles.form_box}>

                    <form onSubmit={onSend} className={`${styles.form}`}>

                    <div className={`${styles.field_box} ${styles.field_5} ${'title_outlined'}`}>
                        Contact Us
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
                <div className={`${styles.info_box}`}>
                    <h3>You can also find Us:</h3>
                    <div>Address: Varna, 10101 Vladislav Varnenchik</div>
                    <div>Phone: +334-536345643</div>
                    <div>Email: support@fithub.bg</div>

                </div>
                </div>
            </div>

        </section>
    )
}

export default Contacts
