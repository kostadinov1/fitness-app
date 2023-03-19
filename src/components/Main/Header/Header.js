import styles from './Header.module.css'


import { Link, useNavigate } from 'react-router-dom'
import { MenuOutlined, PoweroffOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { logoutService } from '../../../api/auth'
import { UserContext } from '../../../contexts/UserContext'
import { useContext } from 'react'

function Header() {
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)               

    const onLogout = (e) => {
        e.preventDefault()
        logoutService(user.user_id)
            .then(({res}) => {
                setUser({user_id: null,
                        token: null,
                        email: null,
                        isAuthenticated: false,
                        })
                console.log('__LOGOUT__', res)})
                navigate('/')
            .catch((res) => {console.log('__LOGOUT__error', res)})
    }

  return (
        <section className={styles.header}>
        <img alt='' className={styles.logo} />
        <h1>Fit Hub</h1>
        <ul className={styles.ul}>
            {!user.isAuthenticated ? 
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
        <div className={styles.auth_icons}>
            <Link to={'/register'}>
            <UserAddOutlined className={styles.register_icon}/>
            </Link>
            <Link to={'/login'}>
            <UserOutlined className={styles.login_icon}/>
            </Link>
            <Link to={'/'}>
            <PoweroffOutlined onClick={onLogout} className={styles.logout_icon}/>
            </Link>
        </div>
            <Link to={'/'}>
            <MenuOutlined  className={styles.menu_icon}/>
            </Link>
        </section >
    )
    }

export default Header
