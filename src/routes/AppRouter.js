import { Route, Routes } from "react-router-dom"
import EyeAccountListingPage from "../pages/eyeAccount/EyeAcountListingPage"

const  AppRouter = () =>  {
  return (
    <Routes>
        <Route path='/' element={"Hub page TBC"} />
        <Route path='/eyeaccount' element={<EyeAccountListingPage/>} />
    </Routes>
  )
}

export default AppRouter