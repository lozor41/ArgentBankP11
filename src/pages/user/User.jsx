import Account from '../../components/account/Account'
import Greeting from '../../components/greeting/Greeting'
import SignInForm from '../../components/signinform/SignInForm'
import { useSelector } from 'react-redux'
import { selectUserFirstName, selectUserLastName } from '../../app/selectors'
import { useState } from 'react'
import '../user/user.css'

function User() {
  const userFirstName = useSelector(selectUserFirstName())
  const userLastName = useSelector(selectUserLastName())
  const [isEditing, setIsEditing] = useState(false)

  const displayEditForm = (e) => {
    e.preventDefault()
    setIsEditing(!isEditing)
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <Greeting firstName={userFirstName} lastName={userLastName} />
        <button className="edit-button" onClick={(e) => displayEditForm(e)}>
          Edit Name
        </button>
        {isEditing && <SignInForm setIsEditing={setIsEditing} />}
      </div>
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
  )
}

export default User