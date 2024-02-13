import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import SignInForm from '../components/SignInForm'
import '../style/signin.css'

export default function SignIn() {
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