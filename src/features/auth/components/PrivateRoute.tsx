import { Navigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

interface PrivateRouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <MainLayout /> : <Navigate to="/login" />;
};

export default PrivateRoute;
