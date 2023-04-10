import baseURL from './baseURL'

const createMacroCycle  = async (user, macroCycleProps) => {
    const url = baseURL + '/periodization/create-macro-cycle/'
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            body: JSON.stringify(macroCycleProps)
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

const getMacroCycle  = async (user, cycleID) => {
    const url = baseURL + `/periodization/get-micro-cycle/${cycleID}/`
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            })
        let macroCycle = await response.json()        
        if (response.ok) {
            return macroCycle
        }
        else {
            throw macroCycle
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}

const editMacroCycle  = async (user, macroCycle, macroCycleProps) => {
    const url = baseURL + `/periodization/edit-macro-cycle/${macroCycle.id}/`
    try {
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            body: JSON.stringify(macroCycleProps)
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
const deleteMacroCycle  = async (user, macroCycle) => {
    const url = baseURL + `/periodization/delete-macro-cycle/${macroCycle.id}/`
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

const getAllMacroCycles = async (user) => {
    const url = baseURL + '/periodization/all-macro-cycles/'
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            })
        let macroCycles = await response.json()        
        if (response.ok) {
            return macroCycles
        }
        else {
            throw macroCycles
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}

export {
    createMacroCycle,
    getMacroCycle,
    editMacroCycle,
    deleteMacroCycle,
    getAllMacroCycles,

}
