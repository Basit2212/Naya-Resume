import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Contact from './Pages/Contact';
import About from './Pages/About';
import ResumePage from './Pages/ResumePage';
import { Analytics } from '@vercel/analytics/react';
import { useAuth0 } from "@auth0/auth0-react";

// Account related
import Account from './components/Account Section/Account';
import Profile from './components/Account Section/Profile';
import FAQs from './Pages/FAQs';

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    let called = false;

    const syncUserToDB = async () => {
      try {
        if (isAuthenticated && !called) {
          called = true;
          const token = await getAccessTokenSilently();
          await fetch("http://localhost:4000/api/auth0/sync", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
        }
      } catch (err) {
        console.error("Sync user failed", err);
      }
    };

    syncUserToDB();
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path='/faqs' element={<FAQs/>}/>

          <Route path="/account" element={<Account />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />

          </Route>
        </Routes>

      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
