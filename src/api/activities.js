
import baseURL from './baseURL' 

const getAllActivities = async () => {
    const url = baseURL + '/activity/list-activities/'
    try {
        let response = await fetch(url)
        let activities = await response.json()        
        if (response.ok) {
            return activities
        }
        else {
            throw activities
        }
    } catch {
        console.log('this is an error in the api service')
    }
        
}

export {
    getAllActivities,
}