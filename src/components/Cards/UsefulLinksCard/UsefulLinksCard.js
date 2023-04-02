import styles from './UsefulLinksCard.module.css'


import React from 'react'
import { YoutubeFilled } from '@ant-design/icons'

function UsefulLinksCard() {
    return (
        <div className={styles.list_card}>
            <h4>Useful Links</h4>
            <hr></hr>
            <p><YoutubeFilled /> YOUTUBE Channels</p>
            <hr></hr>
            <ul>
                <li><a href='https://www.youtube.com/@hubermanlab'>Andrew Huberman</a></li>
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
          )
        }
export default UsefulLinksCard
