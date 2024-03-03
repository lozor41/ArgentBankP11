import Account from '../../components/account/Account'
import Greeting from '../../components/greeting/Greeting'
import EditingProfileForm from '../../components/editingProfileForm/EditingProfileForm'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser, selectCurrentToken, setUser } from '../../app/userSlice'
import { useEffect, useState } from 'react'
import '../user/user.css'
import { getProfile } from '../../api/userApi'

function User() {
  const dispatch = useDispatch()
  const token = useSelector(selectCurrentToken)
  const user = useSelector(selectCurrentUser)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    getProfile(token)
      .then(data => dispatch(setUser(data.body)))
  }, [])



  const displayEditForm = (e) => {
    e.preventDefault()
    setIsEditing(!isEditing)
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <Greeting firstName={user?.firstName} lastName={user?.lastName} />
        {isEditing ? (<EditingProfileForm setIsEditing={setIsEditing} />) :
          (<button className="edit-button" onClick={(e) => displayEditForm(e)}>
            Edit Name
          </button>)}
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