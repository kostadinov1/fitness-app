import baseURL from './baseURL'

const getProfile  = async (id) => {
    const url = baseURL + `/accounts/show-profile/${id}/`
    try {
        let response = await fetch(url)
        let profile = await response.json()        
        if (response.ok) {
            return profile
        }
        else {
            throw profile
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}

const editProfile  = async (user, id, profileProps) => {
    const url = baseURL + `/accounts/edit-profile/${id}/`
    try {
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                
                "content-type": "application/json",
                "Authorization": `Token ${user.token}`,
            },
            body: JSON.stringify(profileProps)
            })
        let edited = await response.json()        
        if (response.ok) {
            return edited
        }
        else {
            throw edited
        }
    } catch(err){
        console.log('catch Err', err.message)
    }
}
const deleteProfile  = async (user, profileID) => {
    const url = baseURL + `/accounts/delete-profile/${profileID}/`
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
        console.log('catch Err', err.message)
    }
}
const uploadProfileImage = async (user, fileObj) => {
    const url = baseURL + `/accounts/upload-profile-image/${user.id}`
    const response = await fetch(url, {
        method: 'put',
        headers: {'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s',
        'Content-Disposition': `attachment; filename=${fileObj.name}`,
        'Authorization': `Token ${user.token}`},
        body: fileObj
    });
    const profileImageEdit = await response.json();
    
    if (profileImageEdit.ok) {
        return profileImageEdit
    } else {
        throw profileImageEdit
    }   
}

export {
    getProfile,
    editProfile,
    deleteProfile,
    uploadProfileImage,
}