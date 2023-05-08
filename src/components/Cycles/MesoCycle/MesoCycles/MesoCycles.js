
import React , { useContext, useEffect, useState}from 'react'
import {getAllMesoCycles} from '../../../../api/cycles/mesoCycle'
import { UserContext } from '../../../../contexts/UserContext'
import PieMacroChart from '../../../NivoCharts/PieMacroChart/PieMacroChart'
import styles from './MesoCycle.module.css'

function MesoCycles() {

    const { user } = useContext(UserContext) 
    const [mesoCycles, setMesoCycles] = useState([])

    const cycleDuration = (start_date, end_date) => {
		const singleDay = 1000 * 60 * 60 * 24
		const startDate = new Date(start_date)
		const endDate = new Date(end_date)
		const res = Math.round(endDate.getTime() - startDate.getTime()) / singleDay;
		const result = res.toFixed(0);
		console.log(result)
		return result
	}


    useEffect(() => {
        getAllMesoCycles(user)
            .then((res) => {console.log(res, 'res in mesosycle')
                setMesoCycles(res)
        })
            .catch((res) => {console.log(res, 'res in ')})
    }, [user])
    

  return (
    <div className={`${styles.mesocycle}`}>
        {mesoCycles ? mesoCycles.map((cycle) => cycleDuration(cycle.start_date, cycle.end_date) ) : <span>no nothing</span>}
    </div>
  )
}

export default MesoCycles
