import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import AnalyticsPage from './pages/Analytics';
import UsersPage from './pages/Users';

function App() {
  return (
    <Routes>
      {/* Aqui definimos que MainLayout é a rota "pai" */}
      <Route path="/" element={<MainLayout />}>
        {/* As rotas "filhas" serão renderizadas dentro do <Outlet /> de MainLayout */}
        <Route index element={<HomePage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
}

export default App;