import baseURL from './baseURL'


const getAllExercises = async () => {
    const url = baseURL + '/activity/list-exercises/'
    try {
        let response = await fetch(url)
        let exercises = await response.json()        
        if (response.ok) {
            return exercises
        }
        else {
            throw exercises
        }
    } catch {
        console.log('this is an error in the api service')
    }
}

const createExercise  = async (exerciseProps) => {
    const url = baseURL + '/activity/create-exercise/'
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
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
    } catch {
        console.log('this is an error in the api service')
    }
}

const getExercise  = async (id) => {
    const url = baseURL + '/activity/get-exercise/' + id
    try {
        let response = await fetch(url)
        let exercise = await response.json()        
        if (response.ok) {
            return exercise
        }
        else {
            throw exercise
        }
    } catch {
        console.log('this is an error in the api service')
    }
}

const editExercise  = async (id, exerciseProps) => {
    const url = baseURL + '/activity/edit-exercise/' + id
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
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
    } catch {
        console.log('this is an error in the api service')
    }
}

const deleteExercise  = async (id) => {
    const url = baseURL + '/activity/delete-exercise/' + id
    try {
        let response = await fetch(url, {
            method: 'POST',
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


export {
    getAllExercises,
    createExercise,
    getExercise,
    editExercise,
    deleteExercise
}