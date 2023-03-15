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


const createActivity  = async (activityProps) => {
    const url = baseURL + '/activity/create-activity/'
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(activityProps)
            })
        let created = await response.json()        
        if (response.ok) {
            return created
        }
        else {
            throw created
        }
    } catch {
        console.log('this is an error in the api service')
    }
}

const getActivity  = async (id) => {
    const url = baseURL + `/activity/get-activity/${id}/`
    try {
        let response = await fetch(url)
        let activity = await response.json()        
        if (response.ok) {
            return activity
        }
        else {
            throw activity
        }
    } catch {
        console.log('this is an error in the api service')
    }
}

const editActivity  = async (id, activityProps) => {
    const url = baseURL + `/activity/edit-activity/${id}/`
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(activityProps)
            })
        let edited = await response.json()        
        if (response.ok) {
            return edited
        }
        else {
            throw edited
        }
    } catch {
        console.log('this is an error in the api service')
    }
}

const deleteActivity  = async (id) => {
    const url = baseURL + `/activity/edit-activity/${id}/`
    try {
        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            },
            })
        let deleted = await response.json()        
        if (response.ok) {
            return deleted
        }
        else {
            throw deleted
        }
    } catch {
        console.log('this is an error in the api service')
    }
}

const listActivityTypes = async () => {
    const url = baseURL + '/activity/list-activity-types/'
    try {
        let response = await fetch(url)
        let activitiesTypes = await response.json()        
        if (response.ok) {
            console.log('in service', activitiesTypes)
            return activitiesTypes
        }
        else {
            throw activitiesTypes
        }
    } catch {
        console.log('this is an error in the api service')
    }
}
export {
    getAllActivities,
    getActivity,
    createActivity,
    editActivity,
    deleteActivity,
    listActivityTypes,

}