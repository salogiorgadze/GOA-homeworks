import { Route, Routes } from "react-router"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import UserProfile from "./pages/UserProfile"
import ProtectedRoute from "./components/ProtectedRoute"
import Nav from "./components/UI/Nav"
import Home from "./pages/Home"



function App() {
  return(
    <>
         <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            {/* სხვა userების პროფილის ნახვა */}
            <Route path="/profile/:userId" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
        </Routes>
    </>
  )
}

export default App
