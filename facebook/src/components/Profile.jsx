function Profile(props) {
  if (!props.isLoggedIn) {
    return (
      <div>
        <p>please login</p>
        <button onClick={props.onClick}>login</button>
      </div>
    )
  }

  return (
    <div>
      <p>welcome {props.name}</p>
    </div>
  )
}
export default Profile