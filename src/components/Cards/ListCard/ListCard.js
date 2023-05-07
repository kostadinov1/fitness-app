import styles from './ListCard.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { DeploymentUnitOutlined, DownOutlined, FireFilled, NodeExpandOutlined, PieChartOutlined, SettingOutlined, SmileOutlined, SubnodeOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons'
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
        <Link to={'/macrocycles'}>
        Macro Cycles
      </Link>
    ),
  },
  {
    key: '2 1',
    label: (
        <Link to={'/create-macrocycle'}>
        Create Macro 
      </Link>
    ),
    icon: <SubnodeOutlined/>
  },
  
  {
    key: '3',
    label: (
      <Link to={'/mesocycles'}>
        Meso Cycles
      </Link>
    ),
  },
  {
    key: '3 1',
    label: (
        <Link to={'/create-mesocycle'}>
        Create Meso 
      </Link>
    ),
    icon: <SubnodeOutlined/>
  },
  {
    key: '4',
    label: (
        <Link to={'/microcycles'}>
        Micro Cycles
      </Link>
    ),
  },
  {
    key: '4 1',
    label: (
        <Link to={'/create-microcycle'}>
        Create Micro 
      </Link>
    ),
    icon: <SubnodeOutlined/>
  },

];

function ListCard(item) {
  return (
<div className={styles.list_card}>
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to={`/dashboard`}><SettingOutlined /> Dashboard</Link></li>
                    <li><Link to={`/profile`}><UserOutlined /> Profile</Link></li>
                    <hr></hr>
                    <li><Link to={'/all-exercises'}><FireFilled /> Exercises</Link></li>
                    <li><Link to={'/create-exercise'}><SubnodeOutlined /> Create Exercise</Link></li>
                    <hr></hr>
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
                    </li>
                    <li><Link to={'/all-activities'}><DeploymentUnitOutlined /> Activities</Link></li>
                    <li><Link to={'/create-activity'}><SubnodeOutlined /> Create Activity</Link></li>
                    <hr></hr>
                    <li><Link to={'/all-cycles'}><SyncOutlined /> Cycles</Link></li>
                    <li><Link to={'/create-cycle'}><SubnodeOutlined /> Create Cycle</Link></li>
                    <hr></hr>
                </ul>
            </div>
  )
}

export default ListCard
