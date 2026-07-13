import { Navigate, Outlet, useLocation } from 'react-router-dom';

export function ProtectedRoute() {
  const location = useLocation();
  return localStorage.getItem('fju_admin_token')
    ? <Outlet />
    : <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
}
