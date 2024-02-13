import logo from '../assets/argentBankLogo_1.webp'
import { Link } from 'react-router-dom'
import '../style/navigation.css'

export default function Navigation() {
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
      <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
        <Link className="main-nav-item" to="/user">
          <i className="fa fa-user-circle"></i>
          Tony
        </Link>
        <Link className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  )
}