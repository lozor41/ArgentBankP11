import '../userheader/userheader.css'

export default function UserHeader(props) {
  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {props.userName} !
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
    </>
  )
}