import { DeploymentUnitOutlined, FireFilled, SettingOutlined, SubnodeOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import FooterBanner from './FooterBanner/FooterBanner'


function Footer() {
  return (
    <section className={styles.footer}>
        <ul className={styles.ul}>
            <li className={styles.li}><Link to={`/dashboard`}><SettingOutlined /> Dashboard</Link></li>
            <li className={styles.li}><Link to={`/profile`}><UserOutlined /> Profile</Link></li>
            <li className={styles.li}><Link to={'/all-exercises'}><FireFilled /> Exercises</Link></li>
            <li className={styles.li}><Link to={'/create-exercise'}><SubnodeOutlined /> Create Exercise</Link></li>
            <li className={styles.li}><Link to={'/all-activities'}><DeploymentUnitOutlined /> Activities</Link></li>
            <li className={styles.li}><Link to={'/create-activity'}><SubnodeOutlined /> Create Activity</Link></li>
            <li className={styles.li}><Link to={'/all-cycles'}><SyncOutlined /> Cycles</Link></li>
            <li className={styles.li}><Link to={'/create-cycle'}><SubnodeOutlined /> Create Cycle</Link></li>                 
        </ul>
        <ul className={styles.ul} type='list'>
            <li><a href='https://www.youtube.com/@athleanx'>AthleanX</a></li>
            <li><a href='https://www.youtube.com/@drandygalpin'>Andy Galpin</a></li>
            <li><a href='https://www.youtube.com/@MI40MuscleIntelligence'>Ben Pakulski</a></li>
            <li><a href='https://www.youtube.com/@calimove'>Calisthenicmovement</a></li>
            <li><a href='https://www.youtube.com/@FoundMyFitness'>FoundMyFitness - Rhonda Patric </a></li>
            <li><a href='https://www.youtube.com/@GarageStrength'>Garage Strength</a></li>
            <li><a href='https://www.youtube.com/@JeffNippard'>Jeff Nippard</a> </li>
            <li><a href='https://www.youtube.com/@TheAnatomyLab'>Institute of Human Anatomy</a></li>
            <li><a href='https://www.youtube.com/@rangeofstrength'>Range of Strength</a></li>
        </ul>
        <ul className={styles.ul} type='list'>
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
        </ul>
        <FooterBanner></FooterBanner>
    </section>
  )
}

export default Footer
