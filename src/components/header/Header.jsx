import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/argentBankLogo_1.webp'
import '../header/header.css'
import { selectCurrentToken, selectCurrentUser, logOut } from '../../app/userSlice'


function Header() {
  const token = useSelector(selectCurrentToken)
  const user = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            src={logo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          {token ? (
            <>
              <NavLink to="/profile" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                {user?.userName}
              </NavLink>
              <NavLink
                to="/"
                className="main-nav-item"
                onClick={() => dispatch(logOut())}
              >
                <i className="fa fa-sign-out"></i>
                Sign Out
              </NavLink>
            </>
          ) : (
            <NavLink to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header