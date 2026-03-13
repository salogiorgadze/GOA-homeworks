import { useState } from "react";

function LogIn({ setUser }) {

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleLogIn = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.name === name &&
      savedUser.pass === pass
    ) {
      setUser(savedUser);
    } else {
      alert("incorrect name or password");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow w-80">

      <h2 className="text-xl font-semibold mb-4">Login</h2>

      <form onSubmit={handleLogIn} className="flex flex-col gap-3">

        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="border p-2 rounded"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="bg-green-500 text-white p-2 rounded">
          Login
        </button>

      </form>
    </div>
  );
}

export default LogIn;