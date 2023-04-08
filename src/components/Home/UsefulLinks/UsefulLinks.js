import { YoutubeFilled } from '@ant-design/icons'
import React, { useState } from 'react'
import EmbededVideo from '../../EmbededVideo/EmbededVideo'
import styles from './UsefulLinks.module.css'

const UsefulLinks = () => {
    const [youtubeURL, setYoutubeURL] = useState('')

    const onFocusHandler = (e) => {
        setYoutubeURL(e.target.href)
    }

  return (
    <div className={`${styles.useful_links}`}>
         <div className={`${styles.list_card_1}`}>
            <EmbededVideo youtubeURL={youtubeURL}></EmbededVideo>
        </div>
         <div className={`${styles.list_card} ${styles.list_card_2}`}>
            <p><YoutubeFilled 
                style={{
                        color: 'red',
                        fontSize: '1.8rem',
                        marginRight: '.2em',    
                    }}
                />Useful YouTube Videos
            </p>
            <ul>
                <li><a onPointerEnter={onFocusHandler} href='https://www.youtube.com/watch?v=zEYE-vcVKy8&list=PLPNW_gerXa4N_PVVoq0Za03YKASSGCazr'>Andrew Huberman and Andy Galpin Playlist</a></li>
                <li><a onPointerEnter={onFocusHandler} href='https://www.youtube.com/watch?v=cILplEggl4I'>Hydration</a></li>
                <li><a onPointerEnter={onFocusHandler} href='https://www.youtube.com/watch?v=OuG-gvFtSgU'>Is Periodization Important?</a></li>
                <li><a onPointerEnter={onFocusHandler} href='https://www.youtube.com/watch?v=N1BjgH1AsMs'>Periodization Basics</a></li>
                <li><a onPointerEnter={onFocusHandler} href='https://www.youtube.com/watch?v=7R3-3HR6-u4'>Satchin Panda - Andrew Huberman </a></li>
                <li><a onPointerEnter={onFocusHandler} href='https://www.youtube.com/watch?v=vHz4BABy0J0&t=1s'>How To Pick The Proper Exercise</a></li>
                <li><a onPointerEnter={onFocusHandler} href='https://www.youtube.com/watch?v=i70T_oLwPwg'>Endurance Training Programming</a> </li>
                <li><a onPointerEnter={onFocusHandler} href='https://www.youtube.com/watch?v=2vXOq-aRtYY'>How Your Muscle Change With Exercise</a></li>
                <li><a onPointerEnter={onFocusHandler} href='https://www.youtube.com/watch?v=1gToyjm4NNA'>How Your Bones Change With Exercise</a></li>
            </ul>
        </div>
    </div>
  )
}

export default UsefulLinks
