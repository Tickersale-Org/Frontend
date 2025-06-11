import { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import Landing from "./pages/Landing";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("landing"); // "landing", "login", or "register"

  // Scroll to top whenever the page changes
  useEffect(() => {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage]); // Trigger whenever currentPage changes

  const navigateToLogin = () => {
    setCurrentPage("login");
  };

  const navigateToLanding = () => {
    setCurrentPage("landing");
  };

  const navigateToRegister = () => {
    setCurrentPage("register");
  };

  // Render current page based on state
  return (
    <AuthProvider>
      <div className="App">
        {currentPage === "landing" && (
          <Landing
            onNavigateToLogin={navigateToLogin}
            onNavigateToRegister={navigateToRegister}
          />
        )}
        {currentPage === "login" && (
          <LoginPage
            onNavigateToLanding={navigateToLanding}
            onNavigateToRegister={navigateToRegister}
          />
        )}
        {currentPage === "register" && (
          <RegisterPage
            onNavigateToLogin={navigateToLogin}
            onNavigateToLanding={navigateToLanding}
          />
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
