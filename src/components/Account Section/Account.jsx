import React, { useState } from 'react';
import { Navigate, Outlet, NavLink } from 'react-router-dom';
import './Account.css';
import { useAuth0 } from '@auth0/auth0-react';

const Account = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
  } = useAuth0();

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  if (isLoading) return <div className="text-center p-5">Loading...</div>;

  if (!isAuthenticated) return <Navigate to="/" />; // Redirect to home if not logged in

  return (
    <div className="account-wrapper">
      {/* Hamburger Toggle */}
      <div className="hamburger d-lg-none p-3">
        <button className="hamburger-btn" onClick={toggleSidebar}>
          ☰ Menu
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`account-sidebar ${showSidebar ? 'open' : ''}`}>
        {/* Close Button (Mobile Only) */}
        <div className="d-lg-none text-end mb-3">
          <button className="close-btn" onClick={toggleSidebar}>❌ Close</button>
        </div>

        <h4 className="sidebar-heading d-none d-lg-block">My Account</h4>
        <nav className="account-nav">
          <NavLink to="/account/profile" className="account-link d-flex gap-2" onClick={() => setShowSidebar(false)}>
            <i className="bi bi-person"></i> Profile
          </NavLink>
          <NavLink to="/account/resumes" className="account-link d-flex gap-2" onClick={() => setShowSidebar(false)}>
            <i className="bi bi-pencil"></i> My Resumes
          </NavLink>
          <NavLink to="/account/settings" className="account-link d-flex gap-2" onClick={() => setShowSidebar(false)}>
            <i className="bi bi-gear"></i> Settings
          </NavLink>
          <NavLink className='account-link d-flex gap-2' onClick={() => logout({ returnTo: window.location.origin })}>
            <i className="bi bi-box-arrow-left"></i> Log out
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="account-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Account;
