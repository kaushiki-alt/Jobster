import { Navigate } from 'react-router-dom';
import { useUser } from '@/context/UserContext';
const ProtectedRoute = ({ children }: {children : React.ReactNode}) => {
  const { user } = useUser();
  if (!user) {
    return <Navigate to='/landing' />;
  }
  return children;
};

export default ProtectedRoute;
