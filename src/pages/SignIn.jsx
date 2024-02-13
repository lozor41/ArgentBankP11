import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import SignInForm from '../components/SignInForm'
import '../style/signin.css'

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