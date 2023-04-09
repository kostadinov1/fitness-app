import baseURL from './baseURL'


const getAllExercises = async (user) => {
    const url = baseURL + '/activity/list-exercises/'
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            })
        let exercises = await response.json()        
        if (response.ok) {
            return exercises
        }
        else {
            throw exercises
        }
    } catch(err){
        console.log('catch Err', err.message)
        throw err
    }
}

const createExercise  = async (user, exerciseProps) => {
    const url = baseURL + '/activity/create-exercise/'
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,

            },
            body: JSON.stringify(exerciseProps)
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
        throw err
    }
}

const getExercise  = async (id) => {
    const url = baseURL + `/activity/get-exercise/${id}/`
    try {
        let response = await fetch(url)
        let exercise = await response.json()        
        if (response.ok) {
            return exercise
        }
        else {
            throw exercise
        }
    } catch(err){
        throw err
    }
}

const editExercise  = async (user, id, exerciseProps) => {
    const url = baseURL + `/activity/edit-exercise/${id}/`
    try {
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,

            },
            body: JSON.stringify(exerciseProps)
            })
        let edited = await response.json()        
        if (response.ok) {
            return edited
        }
        else {
            throw edited
        }
    } catch(err){
        throw err
    }
}
const deleteExercise  = async (user, exerciseID) => {
    const url = baseURL + `/activity/delete-exercise/${exerciseID}/`
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
        throw err
    }
}
const listExerciseTypes = async () => {
    const url = baseURL + '/activity/list-exercise-types/'
    try {
        let response = await fetch(url)
        let exerciseTypes = await response.json()        
        if (response.ok) {
            return exerciseTypes
        }
        else {
            throw exerciseTypes
        }
    } catch(err){
        throw err
    }
}

export {
    getAllExercises,
    createExercise,
    getExercise,
    editExercise,
    deleteExercise,
    listExerciseTypes
}