import styles from './UsefulLinksCard.module.css'
import React from 'react'
import { YoutubeFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'


function UsefulLinksCard() {
    return (
        <div className={styles.list_card}>
            <h4>Useful Links</h4>
            <hr></hr>
            <hr></hr>
            <ul>
                <li><Link to={`${'/'}`}><YoutubeFilled /> YOUTUBE Channels</Link></li>
               
            </ul>
        </div>
          )
        }
export default UsefulLinksCard
