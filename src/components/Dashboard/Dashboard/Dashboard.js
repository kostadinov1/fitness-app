import styles from './Dashboard.module.css'
import GridWeek from './../GridWeek/GridWeek'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import { deleteActivity, getAllActivities } from '../../../api/activities'

function Dashboard() {
  const {user} = useContext(UserContext)
  const [activites, setActivities] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [currentActivityID, setCurrentActivityID] = useState(null)

  useEffect(() => {
      getAllActivities(user)
          .then((res) => { setActivities(res)
              console.log(res)})
          .catch((res) => {})
  }, [user, setActivities])

  const onDelete = (activityID) => {
      setShowDeleteModal(true)
      setCurrentActivityID(activityID)
  }
  const onDeleteCancel = () => {
      setShowDeleteModal(false)
  }
  const onDeleteConfirm = (currentActivityID) => {
          deleteActivity(user, currentActivityID)
              .then((res) => {
                  setActivities((state) => state.filter((ex) => ex.id !== currentActivityID) )
                  setShowDeleteModal(false)})
              .catch()
  }
  return (
    <div className={styles.dashboard}>
        <GridWeek activities={activites}></GridWeek>
    </div>
  )
}

export default Dashboard
