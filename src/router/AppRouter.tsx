import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { PrivateRouter } from "./PrivateRouter"
import { SignUpPage } from "../auth/pages/SignUpPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />

            <Route path="/*" element={<PrivateRouter/>} />
        </Routes>
    </>
  )
}
