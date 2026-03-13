import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import { useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-10 p-10">

      <h1 className="text-3xl font-bold">Authentication Demo</h1>

      <SignUp />

      <LogIn setUser={setUser} />

      <Profile user={user} />

    </div>
  );
}

export default App;