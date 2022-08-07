import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/auth/LoginPage"

function AuthRouter() {
  return (
    <Routes>
        <Route path='/' element={<LoginPage/>} />
    </Routes>
  )
}

export default AuthRouter