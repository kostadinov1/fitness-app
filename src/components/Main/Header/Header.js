import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { MenuOutlined, PoweroffOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { logoutService } from '../../../api/auth'
import { UserContext } from '../../../contexts/UserContext'
import { useContext, useState } from 'react'
import { clearUserData } from '../../../utils/userUtils'
import IconMenu from '../IconMenu/IconMenu'

function Header() {
    const navigate = useNavigate()
    const [toggleMenu, setToggleMenu] = useState(false)
    const {user, setUser, loggedIn, setLoggedIn,} = useContext(UserContext)        
           
    const onLogout = (e) => {
        e.preventDefault()
        logoutService(user)
            .then((res) => {
                setUser({user_id: null,
                        token: null,
                        email: null,
                        isAuthenticated: false,
                        })
                clearUserData()
                localStorage.clear()
                setLoggedIn(false)})
                navigate('/')
            .catch((res) => {})
    }

    const onMenuClick = (e) => {
        e.preventDefault()
        if (toggleMenu === false) {
            setToggleMenu(true)
        } 
        else {
            setToggleMenu(false)
        }
    }

  return (
        <section className={styles.header}>
        <img alt='' className={styles.logo} />
        <Link to={'/'}>
            <h1>Fit Hub</h1>
        </Link>
        <ul className={styles.ul}>
            {loggedIn === false? 
               <li className={styles.li}>
                    <Link to={'/'} className={styles.link}>Home</Link>
                </li>
              : <>
                <li className={styles.li}>
                    <Link to={'/dashboard'} className={styles.link}>Dashboard</Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/all-exercises'} className={styles.link}>Exercises</Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/all-activities'} className={styles.link}>Activities</Link>
                </li>
              </>
        }
            <li className={styles.li}>
            <Link to={'/about-us'} className={styles.link}>About Us</Link>
            </li>
            <li className={styles.li}>
            <Link to={'/contacts'} className={styles.link}>Contacts</Link>
            </li>
        </ul>
        <Link to={`/profile/`} className={styles.user_email}>{user.email}</Link>
        <div className={styles.auth_icons}>
            {loggedIn === false ?
                <>
                    <Link to={'/register'}>
                        <UserAddOutlined className={styles.register_icon}/> register</Link>
                    <Link to={'/login'}>
                        <UserOutlined className={styles.login_icon}/> login</Link>
                </>
                :<Link onClick={onLogout}><PoweroffOutlined  className={styles.logout_icon}/> logout</Link>}
        </div>
            {toggleMenu === true ? 
            <IconMenu></IconMenu>
            :null}
            <Link to={'/'}>
            <MenuOutlined onClick={onMenuClick} className={styles.menu_icon}/>
            </Link>
        </section >
    )
}

export default Header
