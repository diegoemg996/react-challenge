
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/context/useAuth';

export const PublicRoutes = () => {

    const { user } = useAuth();

    return (
        user ? <Navigate to="/user" /> : <Outlet />
    )
}
