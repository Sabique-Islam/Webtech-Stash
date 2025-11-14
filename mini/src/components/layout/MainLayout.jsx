import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../navigation/TopNav';
import SideNav from '../navigation/SideNav';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <TopNav />
      <div className="layout-content">
        <SideNav />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
