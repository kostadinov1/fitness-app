import baseURL from './baseURL'


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
    }
}
const getExerciseType  = async (id) => {
    const url = baseURL + `/activity/get-exercise-type/${id}/`
    try {
        let response = await fetch(url)
        let exerciseType = await response.json()        
        if (response.ok) {
            return exerciseType
        }
        else {
            throw exerciseType
        }
    } catch(err){
        console.log('catch Err', err.message)
        // throw err
    }
}

export {
    listExerciseTypes,
    getExerciseType,
}