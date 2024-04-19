import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { SignUpPage } from "../auth/pages/SignUpPage";
import { ToDoPage } from "../to-do/pages/ToDoPage";
import { CharacterPage } from "../characters/pages/CharacterPage";
import { UserLayout } from "../layout/UserLayout";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRouter";
import { QuizzPage } from "../quizz/page/QuizzPage";
import { CharacterInfo } from "../characters/pages/CharacterInfo";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<PublicRoutes />}>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>

      <Route path="/user" element={<PrivateRoutes />}>
        <Route element={<UserLayout />}>
          <Route index element={<ToDoPage />} />
          <Route path="to-do" element={<ToDoPage />} />
          <Route path="characters" element={<CharacterPage />} />
          <Route path="characters/:id" element={<CharacterInfo />} />
          <Route path="quizz" element={<QuizzPage />} />
        </Route>
      </Route>

      <Route path="/" element={<PrivateRoutes />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
