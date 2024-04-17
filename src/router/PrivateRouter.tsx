import { Navigate, Route, Routes } from "react-router-dom"
import { NewsPage } from "../news/pages/NewsPage"
import { ToDoPage } from "../to-do/pages/ToDoPage"
import { Sidebar } from "../shared/components/Sidebar"

export const PrivateRouter = () => {
  return (
    <>
        <div className="router__container">
          <Sidebar />

          <div className="router__content container">
            <Routes>
                <Route path="news" element={<NewsPage />} />
                <Route path="to-do" element={<ToDoPage />} />

                <Route path="/" element={<Navigate to="/news" />} />
            </Routes>
          </div>
        </div>
    </>
  )
}
