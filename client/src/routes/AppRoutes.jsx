import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { HomePage } from '../pages/HomePage';
import { ProjectPage } from '../pages/ProjectPage';
import { SuccessPage } from '../pages/SuccessPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { LoginPage } from '../pages/admin/LoginPage';
import { DashboardPage } from '../pages/admin/DashboardPage';
import { RegistrationsPage } from '../pages/admin/RegistrationsPage';
import { ProjectsPage } from '../pages/admin/ProjectsPage';
import { ProtectedRoute } from '../components/admin/ProtectedRoute';
import { AdminLayout } from '../components/admin/AdminLayout';
import { MotionObserver } from '../components/ui/MotionObserver';
import { VolunteerPage } from '../pages/VolunteerPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MotionObserver />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projetos/:slug" element={<ProjectPage />} />
          <Route path="inscricao/sucesso/:slug" element={<SuccessPage />} />
          <Route path="voluntario" element={<VolunteerPage />} />
          <Route path="admin/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="registrations" element={<RegistrationsPage />} />
              <Route path="projects" element={<ProjectsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
