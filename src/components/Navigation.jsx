import logo from './argentBankLogo.png'
import '../style/navigation.css'

export default function Navigation() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  )
}