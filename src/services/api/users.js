import instance from './instance';

export function postUsers(payload){
    return instance.post('/users', payload)
}

export function getUsersById(id, payload){
    return instance.get(`/users/${id}`, payload);
}

export function getUsers(){
    return instance.get(`/users`);
}

export function patchUsers(id, payload){
    return instance.patch(`/users/${id}`, payload);
}
