import Footer from '../../components/footer/Footer'
import Navigation from '../../components/navigation/Navigation'
import SignInForm from '../../components/signinform/SignInForm'
import './signin.css'

export default function SignIn() {
    document.title = 'Argent Bank - Sign in'
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </>
  )
}