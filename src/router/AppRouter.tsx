import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { SignUpPage } from "../auth/pages/SignUpPage"
import { ToDoPage } from "../to-do/pages/ToDoPage"
import { CharacterPage } from "../characters/pages/CharacterPage"
import { UserLayout } from "../layout/UserLayout"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRouter"

export const AppRouter = () => {

  return (
    <>
      <Routes>
        <Route path="/auth">
          <Route element={<PublicRoutes/>}>
            <Route index element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>
        </Route>

        <Route path="/user" element={<UserLayout/>}>
          <Route element={<PrivateRoutes/>}>
            <Route index element={<ToDoPage />} />
            <Route path="to-do" element={<ToDoPage />} />
            <Route path="characters" element={<CharacterPage />} />
          </Route>
        </Route>

        <Route path="/" element={<LoginPage />} />      
      </Routes>
    </>
  )
}
