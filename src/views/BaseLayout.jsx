import './BaseLayout.css';
import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      {/* Header with Navbar */}
      <header className="navbar-container d-flex align-items-center bg-dark text-white p-4 shadow-lg">
        <h1 className="logo">
          <a className="text-decoration-none text-white" href="/" target="_blank" rel="noopener noreferrer">
            Purrfect Adoption
          </a>
        </h1>
        <div className="flex-grow-1"></div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/available-cats"
                target="_blank"
                rel="noopener noreferrer"
              >
                Available Cats
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn-donate"
                href="/donate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main id="content" className="container mt-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer bg-dark text-center text-white py-4 mt-5 shadow-lg">
        <p className="mb-0">&copy; 2024 Purrfect Adoption. All Rights Reserved.</p>
        <small>Designed by Md Nahid Hossain</small>
      </footer>
    </div>
  );
};

export default BaseLayout;
