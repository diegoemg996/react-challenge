import { Outlet } from "react-router-dom"
import { Sidebar } from "../shared/components/Sidebar"

export const UserLayout = () => {
  return (
    <div className="router__container">
        <Sidebar />
    <div className="router__content container">
        <Outlet />
    </div>
  </div>
  )
}
