import { Route, Routes } from "react-router-dom"
import EyeAccountCreationPage from "../pages/eyeAccount/EyeAccountCreationPage"
import EyeAccountListingPage from "../pages/eyeAccount/EyeAcountListingPage"

const  AppRouter = () =>  {
  return (
    <Routes>
        <Route path='/' element={"Hub page TBC"} />
        <Route path='/eyeAccount' element={<EyeAccountListingPage/>} />
        <Route path='/eyeAccount/new' element={<EyeAccountCreationPage/>} />
    </Routes>
  )
}

export default AppRouter