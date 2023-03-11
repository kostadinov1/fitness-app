import baseURL from './baseURL'

const registerService = async (email, password) => {
    const url = baseURL + '/accounts/register'
    const data = {
        email: email,
        password: password,
    }
    let response = await fetch(url, {
        method: 'POST',
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        },
        body: JSON.stringify(data)
    })

    let register = await response.json()

    if (register.ok) {
        return register
    }
    else {
        throw register
    }

}

const loginService = async (email, password) => {
    const url = baseURL + '/accounts/register'
    const data = {
        email: email,
        password: password,
    }
    let response = await fetch(url, {
        method: 'POST',
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        },
        body: JSON.stringify(data)
    })

    let register = await response.json()

    if (register.ok) {
        return register
    }
    else {
        throw register
    }

}

const logoutService = async (email, password) => {
    const url = baseURL + '/accounts/register'
    const data = {
        email: email,
        password: password,
    }
    let response = await fetch(url, {
        method: 'POST',
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        },
        body: JSON.stringify(data)
    })

    let register = await response.json()

    if (register.ok) {
        return register
    }
    else {
        throw register
    }

}
export {
    registerService,
    loginService,
    logoutService,
}

