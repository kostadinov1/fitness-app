import baseURL from './baseURL' 


const listActivityTypes = async () => {
    const url = baseURL + '/activity/list-activity-types/'
    try {
        let response = await fetch(url)
        let activitiesTypes = await response.json()        
        if (response.ok) {
            return activitiesTypes
        }
        else {
            throw activitiesTypes
        }
    } catch(err){
        console.log('catch Err', err.message)
        // throw err
    }
}
// get-exercise-type
const getActivityType  = async (id) => {
    const url = baseURL + `/activity/get-activity-type/${id}/`
    try {
        let response = await fetch(url)
        let activity = await response.json()        
        if (response.ok) {
            return activity
        }
        else {
            throw activity
        }
    } catch(err){
        console.log('catch Err', err.message)
        // throw err
    }
}

export {
    listActivityTypes,
    getActivityType,

}