import baseURL from './baseURL'

const registerService = async (email, password) => {
    const url = baseURL + '/accounts/register/'
    const data = {
        "email": email,
        "password": password,
    }
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
            })
            let register = await response.json()
        if (response.ok) {
            console.log('REGISTER in service', register)
            return register
        }
        else {
            throw ('throw in service', register)
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}

const loginService = async (email, password) => {
    const url = baseURL + '/accounts/login/'
    const data = {
        "username": email,
        "password": password,
    }
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
            })
            let login = await response.json()
        if (response.ok) {
            console.log('LOGIN in service', login)
            return login
        }
        else {
            throw ('throw in service', login)
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}
const logoutService = async (user) => {
    console.log('user in logout service ', user)
    const url = baseURL + `/accounts/logout/${user.user_id}/`;

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                 "Authorization": `Token ${user.token}`,
            },
            })
            let logout = await response.json()
        if (response.ok) {
            console.log('catch in service')

            return logout
            
        }
        else {
            throw ('throw in service', logout)
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}

export {
    registerService,
    loginService,
    logoutService,
}

