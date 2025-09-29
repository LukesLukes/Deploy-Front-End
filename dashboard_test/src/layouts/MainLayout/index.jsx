// src\layouts\MainLayout\index.jsx

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './styles.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              {/* O componente <Link> é usado para navegação sem recarregar a página */}
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/analytics">Análises</Link>
            </li>
            <li>
              <Link to="/users">Usuários</Link>
            </li>
            <li>
              <Link to="/settings">Configurações</Link>
            </li>
          </ul>
        </nav>
      </aside>
      
      <main className="content">
        {/* As páginas da sua aplicação (HomePage, AnalyticsPage, etc.) serão renderizadas aqui */}
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;