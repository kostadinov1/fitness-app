

import baseURL from '../baseURL'

const createMicroCycle  = async (user, microCycleProps) => {
    const url = baseURL + '/periodization/create-micro-cycle/'
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            body: JSON.stringify(microCycleProps)
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

const getMicroCycle  = async (user, cycleID) => {
    const url = baseURL + `/periodization/get-micro-cycle/${cycleID}/`
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            })
        let microCycle = await response.json()        
        if (response.ok) {
            return microCycle
        }
        else {
            throw microCycle
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}

const editMicroCycle  = async (user, microCycle, microCycleProps) => {
    const url = baseURL + `/periodization/edit-micro-cycle/${microCycle.id}/`
    try {
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            body: JSON.stringify(microCycleProps)
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
const deleteMicroCycle  = async (user, microCycle) => {
    const url = baseURL + `/periodization/delete-micro-cycle/${microCycle.id}/`
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

const getAllMicroCycles = async (user) => {
    const url = baseURL + '/periodization/all-micro-cycles/'
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            })
        let microCycles = await response.json()        
        if (response.ok) {
            return microCycles
        }
        else {
            throw microCycles
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}

export {
    createMicroCycle,
    getMicroCycle,
    editMicroCycle,
    deleteMicroCycle,
    getAllMicroCycles,

}
