import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectUserIsConnected } from '../../app/selectors'
import LoginForm from '../../components/loginform/loginform'
import '../signin/signin.css'

function SignIn() {
  const userIsConnected = useSelector(selectUserIsConnected())

  if (userIsConnected) {
    return <Navigate to="/profile" replace />
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </main>
  )
}

export default SignIn