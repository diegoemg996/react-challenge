import { NavLink } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="sidebar__container">
        <div className="sidebar__menu">
            <NavLink 
              to="/to-do" 
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
              to="/characters" 
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
    </div>
  )
}
