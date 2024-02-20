export const API_URL = 'http://localhost:3001/api/v1'
const loginUrl = `${API_URL}/user/login`
const profileUrl = `${API_URL}/user/profile`

export const login = ({ email, password }) => fetch(loginUrl, {
    method: 'post',
    body: JSON.stringify({ email, password }),
    headers: {
        "Content-Type": "application/json"
    }
}).then(res => res.json())

export const getProfile = () => fetch(profileUrl, {
    method: 'post',
    headers: {
        "Content-Type": "application/json"
    }
}).then(res => res.json())
