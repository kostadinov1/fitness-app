import baseURL from './baseURL' 

const createContactMessage  = async (data) => {
    const url = baseURL + '/core/create-message/'
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",

            },
            body: JSON.stringify(data)
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
export {
    createContactMessage,
    
}
