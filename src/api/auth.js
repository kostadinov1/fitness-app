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
            return register
        }
        else {
            throw ('throw in service', register)
        }
    } catch(err){
        throw err
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
            return login
        }
        else {
            throw ('throw in service', login)
        }
    } catch(err){
        console.log(err, 'error in loginService')
        throw err
    }
}
const logoutService = async (user) => {
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
            return logout
        }
        else {
            throw ('throw in service', logout)
        }
    } catch(err){
        throw err
    }
}

export {
    registerService,
    loginService,
    logoutService,
}

