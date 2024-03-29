import styles from './Profile.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import { deleteProfile, getProfile } from '../../../api/profile'
import ListCard from '../../Cards/ListCard/ListCard'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import EditProfileModal from '../EditProfileModal/EditProfileModal'
import DeleteProfileModal from '../DeleteProfile/DeleteProfileModal'
import { useNavigate } from 'react-router-dom'
import { logoutService } from '../../../api/auth'
import { clearUserData } from '../../../utils/userUtils'

function Profile() {
	const navigate = useNavigate()
    const {user, setUser, loggedIn, setLoggedIn,} = useContext(UserContext)        
	const [profile, setProfile] = useState({
		first_name: '',
        last_name: '',
        address: null,
        dob: null, 
        gender: null,
	})
	const [toggleEdit, setToggleEdit] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

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
	}
    const onDelete = () => {
        setShowDeleteModal(true)
        
    }
    const onDeleteCancel = () => {
        setShowDeleteModal(false)
    }
    const onDeleteConfirm = (user) => {
        deleteProfile(user)
			.then((res) => {
				clearUserData()
				setLoggedIn(false)
				setShowDeleteModal(false)
					setUser({user_id: null,
					token: null,
					email: null,
					isAuthenticated: false,
					})
				navigate('/')
			})
			.catch((res) => {console.log(res, 'res in error catch onDeleteConfirm2')})
		}

	return (
		<section className={`${styles.profile}`}>
			{showDeleteModal ? <DeleteProfileModal 
                                    onDeleteCancel={onDeleteCancel} 
                                    onDeleteConfirm={onDeleteConfirm}
                                    user={user}
                                    /> 
                            : null}
            <div className={`${styles.sider_1}`}>
            	<ListCard></ListCard>
            </div>
            <div className={styles.sider_2}>
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
