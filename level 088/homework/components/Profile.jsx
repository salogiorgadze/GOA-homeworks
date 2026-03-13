function Profile({ user }) {

  return (
    <div className="bg-white p-6 rounded-xl shadow w-80">

      <h2 className="text-xl font-semibold mb-4">Profile</h2>

      {user ? (
        <div className="flex flex-col gap-2">

          <p>
            <span className="font-semibold">User Name:</span> {user.name}
          </p>

          <p>
            <span className="font-semibold">User Surname:</span> {user.surname}
          </p>

        </div>
      ) : (
        <p>No user logged in</p>
      )}

    </div>
  );
}

export default Profile;