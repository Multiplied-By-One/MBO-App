import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/auth/LoginPage"
import React, { ReactElement } from 'react'

function AuthRouter(): ReactElement<any, any> {
  return (
    <Routes>
        <Route path='/' element={<LoginPage/>} />
    </Routes>
  )
}

export default AuthRouter