import { Navigate, Route, Routes } from "react-router-dom"
import { CharacterPage } from "../characters/pages/CharacterPage"
import { ToDoPage } from "../to-do/pages/ToDoPage"
import { Sidebar } from "../shared/components/Sidebar"

export const PrivateRouter = () => {
  return (
    <>
        <div className="router__container">
          <Sidebar />

          <div className="router__content container">
            <Routes>
                <Route path="characters" element={<CharacterPage />} />
                <Route path="to-do" element={<ToDoPage />} />

                <Route path="/" element={<Navigate to="/to-do" />} />
            </Routes>
          </div>
        </div>
    </>
  )
}
