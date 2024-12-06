import { useEffect, useState } from "react";
import Login from "./components/Login";
import UserDashboard from "./components/UserDashboard";

function App() {
  const [isAunthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = window.localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <div className="">
      {isAunthenticated ? (
        <UserDashboard
          isAunthenticated={isAunthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

export default App;
