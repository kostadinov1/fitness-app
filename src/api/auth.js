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
    } catch {
        console.log('catch in service')
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
    } catch {
        console.log('catch in service')
    }

}

const logoutService = async (id) => {
    const url = baseURL + '/accounts/logout/' + id;

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            })
            let logout = await response.json()
        if (response.ok) {
            return logout
        }
        else {
            throw ('throw in service', logout)
        }
    } catch {
        console.log('catch in service')
    }

}

export {
    registerService,
    loginService,
    logoutService,
}

