import baseURL from './baseURL'

const createGoal  = async (user, goalProps) => {
    const url = baseURL + '/periodization/create-goal/'
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            body: JSON.stringify(goalProps)
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

const getGoal  = async (user, goalID) => {
    const url = baseURL + `/periodization/get-goal/${goalID}/`
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            })
        let goal = await response.json()        
        if (response.ok) {
            return goal
        }
        else {
            throw goal
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}

const editGoal  = async (user, goal, goalProps) => {
    const url = baseURL + `/periodization/edit-goal/${goal.id}/`
    try {
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            body: JSON.stringify(goalProps)
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
const deleteGoal  = async (user, goal) => {
    const url = baseURL + `/periodization/delete-goal/${goal.id}/`
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

const getAllGoals = async (user) => {
    const url = baseURL + '/periodization/all-goals/'
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            })
        let goals = await response.json()        
        if (response.ok) {
            return goals
        }
        else {
            throw goals
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}

export {
    createGoal,
    getGoal,
    editGoal,
    deleteGoal,
    getAllGoals,

}
