import { useEffect, useState } from 'react'
import '../style/signinform.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../app/actions/LoginActions'
import { useNavigate } from 'react-router'

export default function SignInForm() {
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      navigate('/user')
    }
  }, [navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }


  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit" name="Login">
          Sign In
        </button>
        <br />
        {error && <div>Please check the login informations.</div>}
      </form>
    </section>
  )
}