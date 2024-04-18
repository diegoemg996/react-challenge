import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../../auth/context/useAuth"

export const Sidebar = () => {

  const {signOut} = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/auth/login')
  }

  return (
    <div className="sidebar__container">
        <div className="sidebar__menu">
            <NavLink 
              to="/user/to-do" 
              className={ 
                ({isActive}: {isActive: boolean}) => `sidebar__menu-item p-4 ${ isActive ? 'sidebar__menu-item--active':'' }`
              }
            >
              <span>
                <i className="fa-regular fa-square-check m-r-2"></i>
              </span>
              To do
            </NavLink>
            <NavLink 
              to="/user/characters" 
              className={ 
                ({isActive}: {isActive: boolean}) => `sidebar__menu-item p-4 ${ isActive ? 'sidebar__menu-item--active':'' }`
              }
            >
              <span>
                <i className="fa-regular fa-user m-r-2"></i>
              </span>
              Characters
            </NavLink>
        </div>
        <button 
          className="btn btn-primary p-4"
          onClick={handleSignOut}
        >
          <span>
            <i className="fa-solid fa-right-from-bracket"></i>
          </span>
              Sign Out
        </button>
      </div>
  )
}
