import { YoutubeFilled } from '@ant-design/icons'
import React, { useState } from 'react'
import styles from './YoutubeChannels.module.css'
function YoutubeChannels() {
    const [youtubeURL, setYoutubeURL] = useState('')

    const onFocusHandler = (e) => {
        setYoutubeURL(e.target.html)
    }
  return (
    <div className={`${styles.youtube_channels}`}>

         <div className={`${styles.list_card} ${styles.list_card_1}`}>
            <p><YoutubeFilled /> YOUTUBE Channels</p>
            <hr></hr>
            <ul>
                <li><a onPointerEnter={onFocusHandler} href='https://www.youtube.com/@hubermanlab'>Andrew Huberman</a></li>
                <li><a href='https://www.youtube.com/@athleanx'>AthleanX</a></li>
                <li><a href='https://www.youtube.com/@drandygalpin'>Andy Galpin</a></li>
                <li><a href='https://www.youtube.com/@MI40MuscleIntelligence'>Ben Pakulski</a></li>
                <li><a href='https://www.youtube.com/@calimove'>Calisthenicmovement</a></li>
                <li><a href='https://www.youtube.com/@FoundMyFitness'>FoundMyFitness - Rhonda Patric </a></li>
                <li><a href='https://www.youtube.com/@GarageStrength'>Garage Strength</a></li>
                <li><a href='https://www.youtube.com/@JeffNippard'>Jeff Nippard</a> </li>
                <li><a href='https://www.youtube.com/@TheAnatomyLab'>Institute of Human Anatomy</a></li>
                <li><a href='https://www.youtube.com/@rangeofstrength'>Range of Strength</a></li>
                <li><a href='https://www.youtube.com/@RenaissancePeriodization'>Renaissance Periodization</a> </li>
                <li><a href='https://www.youtube.com/@redefiningstrengthOC'>Redefining Strength</a></li>
                <li><a href='https://www.youtube.com/@shreddedsportsscience'>Shreded Sports Science</a></li>
                <li><a href='https://www.youtube.com/@SquatUniversity'>Squat University</a></li>
                <li><a href='https://www.youtube.com/@StrengthSensei'>Strength Sensei</a></li>
                <li><a href='https://www.youtube.com/@strongerbyscience'>Stronger By Science</a></li>
                <li><a href='https://www.youtube.com/@SaturnoMovement'>SaturnoMovement</a></li>
                <li><a href='https://www.youtube.com/@TheBioneer'>The Bioneer</a></li>
                <li><a href='https://www.youtube.com/@TheKneesovertoesguy'>The Kneesovertoesguy</a></li>
                <li><a href='https://www.youtube.com/@timferriss'>Tim Ferriss</a></li>
                <li><a href=''> </a></li>
            </ul>
        </div>

         <div className={`${styles.list_card} ${styles.list_card_2}`}>
         

         </div>
    </div>
  )
}

export default YoutubeChannels
