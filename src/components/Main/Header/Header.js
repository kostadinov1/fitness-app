import styles from './Header.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AimOutlined, BlockOutlined, ContactsOutlined, DeploymentUnitOutlined, DownOutlined, FireFilled, MenuOutlined, PieChartOutlined, PoweroffOutlined, RightOutlined, SubnodeOutlined, SyncOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { logoutService } from '../../../api/auth'
import { UserContext } from '../../../contexts/UserContext'
import { useContext, useState } from 'react'
import { clearUserData } from '../../../utils/userUtils'
import IconMenu from '../../Custom/IconMenu/IconMenu'


function Header() {
    const navigate = useNavigate()
    const [toggleMenu, setToggleMenu] = useState(false)
    const {user, setUser,setLoggedIn,} = useContext(UserContext)        
           

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
                setLoggedIn(false)
                navigate('/')
            })
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
            <h1>Periodization</h1>
        </Link>
        <ul className={styles.ul}>
            {user.isAuthenticated === false? 
               <li className={styles.li}>
                    <NavLink 
                    activeClassName='active'
                    to={'/'} className={styles.link}>Home</NavLink>
                </li>
              : <>
                <li className={styles.li}>
                    <NavLink 
                    activeClassName='active'
                    to={'/dashboard'} className={styles.link}><BlockOutlined/> Dashboard</NavLink>
                </li>

               
                <li className={styles.li}>
                    <NavLink 
                    activeClassName='active'
                    to={'/all-activities'} className={styles.link}><DeploymentUnitOutlined /> Activities</NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink 
                    activeClassName='active'
                    to={'/all-exercises'} className={styles.link}><FireFilled /> Exercises</NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink 
                    activeClassName='active'
                    to={'/periodization'} className={styles.link}><AimOutlined /> Periodization</NavLink>
                </li>
              </>
        }

            <li className={styles.li}>
                <NavLink 
                activeClassName='active'
                to={'/contacts'} className={styles.link}><ContactsOutlined /> Contacts</NavLink>
            </li>
        </ul>
        <Link to={`/profile/`} className={styles.user_email}><UserOutlined/> {user.email}</Link>
        <div className={styles.auth_icons}>
            {user.isAuthenticated === false ?
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
