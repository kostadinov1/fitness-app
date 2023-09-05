import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { AimOutlined, BlockOutlined, ContactsOutlined, DeploymentUnitOutlined, DownOutlined, FireFilled, MenuOutlined, PieChartOutlined, PoweroffOutlined, RightOutlined, SubnodeOutlined, SyncOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { logoutService } from '../../../api/auth'
import { UserContext } from '../../../contexts/UserContext'
import { useContext, useState } from 'react'
import { clearUserData } from '../../../utils/userUtils'
import IconMenu from '../../Custom/IconMenu/IconMenu'
import { Dropdown, Space } from 'antd'

const items = [
    {
        key: '1',
        label: (
            <Link to={'/periodization'}>
            Periodization
          </Link>
        ),
        icon: <PieChartOutlined/>
      },
  {
    key: '2',
    label: (
        <Link to={'/macro-cycles'}>
        Macro Cycles
      </Link>
    ),
    icon: <SyncOutlined />,
  },
  {
    key: '2 1',
    label: (
        <Link to={'/create-macro-cycle'}>
        Create Macro 
      </Link>
    ),
    icon: <SubnodeOutlined/>
  },
  
  {
    key: '3',
    label: (
      <Link to={'/meso-cycles'}>
        Meso Cycles
      </Link>
    ),
    icon: <SyncOutlined />,
  },
  {
    key: '3 1',
    label: (
        <Link to={'/create-meso-cycle'}>
        Create Meso 
      </Link>
    ),
    icon: <SubnodeOutlined/>
  },
  {
    key: '4',
    label: (
        <Link to={'/micro-cycles'}>
        Micro Cycles
      </Link>
    ),
    icon: <SyncOutlined />,
  },
  {
    key: '4 1',
    label: (
        <Link to={'/create-micro-cycle'}>
        Create Micro 
      </Link>
    ),
    icon: <SubnodeOutlined/>
  },

];

function Header() {
    const navigate = useNavigate()
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false)
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
    const onDropdownMenuClick = (e) => {
        e.preventDefault()
        if (toggleDropdownMenu === false) {
            setToggleDropdownMenu(true)
        } 
        else {
            setToggleDropdownMenu(false)
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
                    <Link to={'/'} className={styles.link}>Home</Link>
                </li>
              : <>
                <li className={styles.li}>
                    <Link to={'/dashboard'} className={styles.link}><BlockOutlined/> Dashboard</Link>
                </li>

               
                <li className={styles.li}>
                    <Link to={'/all-activities'} className={styles.link}><DeploymentUnitOutlined /> Activities</Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/all-exercises'} className={styles.link}><FireFilled /> Exercises</Link>
                </li>
                {/* <li onClick={onDropdownMenuClick} className={`${styles.li} ${styles.dropdown_menu}`}>
                    <span className={styles.link}><PieChartOutlined /> Cycles {toggleDropdownMenu ? <RightOutlined /> : <DownOutlined />}</span>


                        {toggleDropdownMenu === true ? 
                            <ul className={`${styles.dropdown_ul}`}>
                                <li className={styles.li}>
                                    <Link
                                        to={'/periodization'} 
                                        className={styles.link}
                                        ><DeploymentUnitOutlined /> Periodization</Link>
                                </li>
                                <li className={styles.li}>
                                    <Link
                                        to={'/macrocycles'} 
                                        className={styles.link}
                                        ><SyncOutlined /> Macro</Link>
                                </li>
                                <li className={styles.li}>
                                    <Link
                                        to={'/mesocycles'} 
                                        className={styles.link}
                                        ><SyncOutlined /> Meso</Link>
                                </li>
                                <li className={styles.li}>
                                    <Link
                                        to={'/microcycles'} 
                                        className={styles.link}
                                        ><SyncOutlined /> Micro</Link>
                                </li>
                            </ul>
                            :null}

                </li> */}

                {/* 
                
                CYCLES DROPDOWN 

                <li>
                <Dropdown
                        menu={{
                            items,
                        }}
                        >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                        <PieChartOutlined />
                            Cycles
                            <DownOutlined />
                            </Space>
                        </a>
                        </Dropdown>
                </li> */}

                {/* 
                <li className={styles.li}>
                    <Link to={'/'} className={styles.link}><AimOutlined /> Goals</Link>
                </li> */}
                <li className={styles.li}>
                    <Link to={'/periodization'} className={styles.link}><AimOutlined /> Periodization</Link>
                </li>
              </>
        }

            <li className={styles.li}>
                <Link to={'/contacts'} className={styles.link}><ContactsOutlined /> Contacts</Link>
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
