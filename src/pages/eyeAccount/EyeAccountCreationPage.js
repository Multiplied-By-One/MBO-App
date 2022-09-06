import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/auth/LoginPage"
import EyeAccountListingPage from "./EyeAcountListingPage"

const  AppRouter = () =>  {
  return (
    <Routes>
        <Route path='/' element={"Hub page TBC"} />
        <Route path='/eyeaccount' element={<EyeAccountListingPage/>} />
    </Routes>
  )
}

export default AppRouter