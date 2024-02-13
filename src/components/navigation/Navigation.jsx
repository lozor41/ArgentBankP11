import logo from '../../assets/argentBankLogo_1.webp'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import '../navigation/navigation.css'
import { logout } from '../../app/actions/LoginActions'

export default function Navigation() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  console.log(userLogin)

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
      <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
      {!userLogin.userInfo?.body.token ? (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          ''
        )}
        {userLogin.userInfo?.body.token ? (
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            Tony
          </Link>
        ) : (
          ''
        )}
        {userLogin.userInfo?.body.token ? (
          <Link onClick={logoutHandler} className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : (
          ''
        )}
      </div>
    </nav>
  )
}