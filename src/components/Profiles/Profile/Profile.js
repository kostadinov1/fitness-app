import styles from './Profile.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import { deleteProfile, getProfile } from '../../../api/profile'
import ListCard from '../../Cards/ListCard/ListCard'
import UsefulLinksCard from '../../Cards/UsefulLinksCard/UsefulLinksCard'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { logoutService } from '../../../api/auth'
import { clearUserData } from '../../../utils/userUtils'
import EditProfileModal from '../EditProfileModal/EditProfileModal'

function Profile() {
    const {user, setUser, loggedIn, setLoggedIn,} = useContext(UserContext)        
	const [profile, setProfile] = useState({})
	const navigate = useNavigate()
	const [toggleEdit, setToggleEdit] = useState(false)
	const [toggleDelete, setToggleDelete] = useState(false)


	useEffect(() => {
		getProfile(user)
			.then((res) => {setProfile(res)})
			.catch((res) => {})
	}, [user, ])

	const onEdit = () => {
		if (toggleEdit) {
			setToggleEdit(false)
		} else {
			setToggleEdit(true)
		}
		console.log(toggleEdit)
	}

	const onDelete = () => {
		deleteProfile(user)
			.then((res) => {
				logoutService(user)
				.then((res) => {
					setUser({user_id: null,
							token: null,
							email: null,
							isAuthenticated: false,
							})
					clearUserData()
					localStorage.clear()
					setLoggedIn(false)
	
					console.log('__LOGOUT__', res)})
					navigate('/')
				.catch((res) => {console.log('__LOGOUT__error', res)})
					
				navigate('/')
				console.log('profile deleted', res);
			})
			.catch((res) => {
				console.log('res error', res);
			})
	}


	return (
		<section className={`${styles.profile}`}>
            <div className={`${styles.sider_1}`}>
            	<ListCard></ListCard>
            </div>
            <div className={styles.sider_2}>
                <UsefulLinksCard></UsefulLinksCard>
            </div>
            <div className={styles.profile_box}>
				<div className={`${styles.card} ${styles.card_1}`}>
					<img src={`${profile.image_local}`} alt='' />
				</div>
				<div className={`${styles.card} ${styles.card_2}`}>
				PROFILE CARD
				</div>
				<div className={`${styles.card} ${styles.card_3}`}>
					PROFILE CARD
				</div>
				<div className={`${styles.card} ${styles.card_4}`}>
						<button
							onClick={onEdit} 
							className={`${styles.button}`}>
							<EditOutlined /> Edit
						</button>
						<button 
							onClick={onDelete}
							className={`${styles.button}`}>
						<DeleteOutlined /> Delete
						</button>
				</div>
				<div className={`${styles.card} ${styles.card_5}`}>
					Settings
				</div>
				<div className={`${styles.card} ${styles.card_6}`}>
					PROFILE CARD
				</div>
				<div className={`${styles.card} ${styles.card_7}`}>
                <h3>{profile.first_name} {profile.last_name}</h3>
                <ul>
                    <li>DOB: {profile.dob}</li>
                    <li>Phone: {profile.phone}</li>
                    <li>Email: {user.email}</li>
                    <li>Gender: {profile.gender}</li>
                    <li>Prime Sport: All In One</li>
                </ul>
				</div>
			</div>
			{toggleEdit ?
				<EditProfileModal setToggleEdit={setToggleEdit}/>
			   : null}
        </section>
	)
}

export default Profile
