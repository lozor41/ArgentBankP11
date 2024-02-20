import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../api/userApi'
import { setToken } from '../../app/userSlice'
import { useNavigate } from 'react-router'


function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputUsername = useRef()
  const inputPassword = useRef()
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    login({ email: inputUsername.current.value, password: inputPassword.current.value })
      .then(data => {
        dispatch(setToken(data.body.token))
        navigate('/profile')
      })
      .catch(err => setError(err))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={inputUsername} required />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={inputPassword} required />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
      {error !== null ? (
        <p style={{ color: 'red', marginBottom: 0 }}>
          Error : Username or password
        </p>
      ) : null}
    </form>
  )
}

export default LoginForm