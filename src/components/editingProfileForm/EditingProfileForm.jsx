import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './editingProfileForm.css'
import { selectCurrentUser, selectCurrentToken, setUser } from '../../app/userSlice'
import { updateUsername } from '../../api/userApi'

// eslint-disable-next-line react/prop-types
function EditingProfileForm({ setIsEditing }) {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)
  const inputUserName = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    updateUsername(token, { userName: inputUserName.current.value })
      .then(data => dispatch(setUser(data.body)))

    setIsEditing(false)
  }

  return (
    <form className="editing-profile-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          ref={inputUserName}
          defaultValue={user.userName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          defaultValue={user.firstName}
          disabled
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          defaultValue={user.lastName}
          disabled
        />
      </div>
      <button className="btn btn-save" type="submit">
        Save
      </button>
      <button className="btn btn-cancel" onClick={() => setIsEditing(false)}>
        Cancel
      </button>
    </form>
  )
}

export default EditingProfileForm