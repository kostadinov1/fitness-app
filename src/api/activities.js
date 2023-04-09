import baseURL from './baseURL' 

const getAllActivities = async (user) => {
    const url = baseURL + '/activity/list-activities/'
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            })
        let activities = await response.json()        
        if (response.ok) {
            return activities
        }
        else {
            throw activities
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}


const createActivity  = async (user, activityProps) => {
    const url = baseURL + '/activity/create-activity/'
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,

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
    } catch(err){
        console.log('catch Err', err.message)
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
    } catch(err){
        console.log('catch Err', err.message)
        throw err
    }
}

const editActivity  = async (user, id, activityProps) => {
    console.log('acitvityProps in api', activityProps)
    const url = baseURL + `/activity/edit-activity/${id}/`
    try {
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
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
    } catch(err){
        console.log('catch Err', err.message)
        throw err
    }
}

const deleteActivity  = async (user, activityID) => {
    const url = baseURL + `/activity/delete-activity/${activityID}/`
    try {
        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            })
        let deleted = await response.json()        
        if (response.ok) {
            return deleted
        }
        else {
            throw deleted
        }
    } catch(err){
        console.log('catch Err', err.message)
        throw err
    }
}
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
        throw err
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