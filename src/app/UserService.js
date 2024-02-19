import { API_URL } from '../api/userApi'

export default class UserService {
  constructor(apiUrl = API_URL) {
    this.apiUrl = apiUrl
  }
  async getUserProfile(token) {
    try {
      const requestGetUserProfile = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }

      const getUserProfile = await fetch(
        this.apiUrl + 'user/profile',
        requestGetUserProfile
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Get user profil failed')
          }
          return response.json()
        })
        .then((data) => data.body)
        .catch((error) => error)
      return getUserProfile
    } catch (error) {
      console.log(error)
      return Promise.reject("Server error : can't get user profil")
    }
  }

  async updateUserProfile(token, firstName, lastName) {
    try {
      const requestUpdateUserProfile = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
        }),
      }
      const updateUserProfile = await fetch(
        this.apiUrl + 'user/profile',
        requestUpdateUserProfile
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('update user profil failed')
          }
          return response.json()
        })
        .then((data) => data.body)
        .catch((error) => error)
      return updateUserProfile
    } catch (error) {
      console.log(error)
      return Promise.reject("Server error : can't update user profil")
    }
  }
}