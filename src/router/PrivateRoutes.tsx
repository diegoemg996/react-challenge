
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/context/useAuth';

export const PrivateRoutes = () => {

    const { user } = useAuth();

    return (
        user ? <Outlet /> : <Navigate to="/auth/login" />
    )
}
