import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light navbar-light mb-0 shadow-lg">
        <div className="container">
          <a
            className="navbar-brand"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCX1Doe8q-FfiXeLaWC_0iRBOQ7ajltVjBaQ&s"
              alt="logo"
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse m-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-lg-0"></ul>
            <ul
              className="navbar-nav me-right mb-lg-0"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            >
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#courses">
                  COURSES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
