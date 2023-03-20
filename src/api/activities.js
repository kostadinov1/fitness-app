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
    } catch {
        console.log('this is an error in the api service')
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
    } catch {
        console.log('this is an error in the api service')
    }
}

const getActivity  = async (id) => {
    console.log('id in api service:', id)
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
        console.log('__IN__api_catch')
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
    } catch {
        console.log('this is an error in the api service')
    }
}

const deleteActivity  = async (user) => {
    const url = baseURL + `/activity/delete-activity/${user.id}/`
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