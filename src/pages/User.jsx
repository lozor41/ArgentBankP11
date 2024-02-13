import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Account from '../components/Account'
import UserHeader from '../components/UserHeader'
import '../style/user.css'

export default function User() {
  return (
    <>
      <Navigation />
      <main className="main bg-dark bg-padding">
        <UserHeader userName="Tony Jarvis" />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  )
}