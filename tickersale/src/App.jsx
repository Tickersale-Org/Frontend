import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Landing from "./pages/Landing";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("landing"); // "landing" or "login"

  const navigateToLogin = () => {
    setCurrentPage("login");
  };

  const navigateToLanding = () => {
    setCurrentPage("landing");
  };

  // Render current page based on state
  return (
    <AuthProvider>
      <div className="App">
        {currentPage === "landing" && (
          <Landing onNavigateToLogin={navigateToLogin} />
        )}
        {currentPage === "login" && (
          <LoginPage onNavigateToLanding={navigateToLanding} />
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
