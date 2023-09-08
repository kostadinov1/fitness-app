import baseURL from '../baseURL'

const createMesoCycle  = async (user, mesoCycleProps) => {
    const url = baseURL + '/periodization/create-meso-cycle/'
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            body: JSON.stringify(mesoCycleProps)
            })
        let created = await response.json()        
        if (response.ok) {
            return created
        }
        else {
            throw created
        }
    } catch(err){
        console.log('CATCH ERROR IN API CALL - MESO CYCLE. MESSAGE: ', err.message, 'END.')
    }
}

const getMesoCycle  = async (user, cycleID) => {
    const url = baseURL + `/periodization/get-meso-cycle/${cycleID}/`
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            })
        let mesoCycle = await response.json()        
        if (response.ok) {
            return mesoCycle
        }
        else {
            throw mesoCycle
        }
    } catch(err){
        console.log('CATCH ERROR IN API CALL - MESO CYCLE. MESSAGE: ', err.message, 'END.')
    }
}

const editMesoCycle  = async (user, mesoCycle, mesoCycleProps) => {
    const url = baseURL + `/periodization/edit-meso-cycle/${mesoCycle.id}/`
    try {
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            body: JSON.stringify(mesoCycleProps)
            })
        let edited = await response.json()        
        if (response.ok) {
            return edited
        }
        else {
            throw edited
        }
    } catch(err){
        console.log('CATCH ERROR IN API CALL - MESO CYCLE. MESSAGE: ', err.message, 'END.')
        // throw err
    }
}
const deleteMesoCycle  = async (user, mesoCycle) => {
    const url = baseURL + `/periodization/delete-meso-cycle/${mesoCycle.id}/`
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
        console.log('CATCH ERROR IN API CALL - MESO CYCLE. MESSAGE: ', err.message, 'END.')
    }
}

const getAllMesoCycles = async (user) => {
    const url = baseURL + '/periodization/all-meso-cycles/'
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            })
        let mesoCycles = await response.json()        
        if (response.ok) {
            return mesoCycles
        }
        else {
            throw mesoCycles
        }
    } catch(err){
        console.log('CATCH ERROR IN API CALL - MESO CYCLE. MESSAGE: ', err.message, 'END.')
    }
}

export {
    createMesoCycle,
    getMesoCycle,
    editMesoCycle,
    deleteMesoCycle,
    getAllMesoCycles,

}
