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

export {
    getAllExercises,
}