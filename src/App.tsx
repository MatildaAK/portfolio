import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <button id="theme-switch" onClick={toggleDarkMode}>
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} size="xl" />
          ) : (
            <FontAwesomeIcon icon={faMoon} size="xl" />
          )}
        </button>
        <div className="min-h-screen flex flex-col bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
