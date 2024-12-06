import React from "react";
import Summary from "./Summary";
import Dashboard from "./Dashboard";
import Reports from "./Reports";

const UserDashboard = ({ setIsAuthenticated }) => {
  const [renderedComponent, setRenderedComponent] = React.useState("summary");

  const renderComponent = (component) => {
    setRenderedComponent(component);
    if (component === "logout") {
      window.localStorage.removeItem("isAuthenticated");
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className="col-span-2 bg-gray-200 min-h-screen border-r"
        role="navigation"
        aria-label="Sidebar Navigation"
      >
        <div className="p-4 flex flex-col justify-center items-center">
          <div
            className="h-16 w-16 rounded-full bg-gray-400 flex justify-center items-center"
            aria-label="User Profile Image"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="User profile icon"
              className="h-16"
            />
          </div>
          <h1 className="text-center text-lg font-bold mt-2">User</h1>
          <nav className="mt-4 w-full">
            <ul className="flex flex-col">
              <li className="p-4 border-b border-gray-400 hover:bg-gray-300">
                <button
                  onClick={() => renderComponent("dashboard")}
                  aria-label="Go to Dashboard"
                  className="w-full text-left"
                >
                  Dashboard
                </button>
              </li>
              <li className="p-4 border-b border-gray-400 hover:bg-gray-300">
                <button
                  onClick={() => renderComponent("summary")}
                  aria-label="Go to Summary"
                  className="w-full text-left"
                >
                  Summary
                </button>
              </li>
              <li className="p-4 border-b border-gray-400 hover:bg-gray-300">
                <button
                  onClick={() => renderComponent("reports")}
                  aria-label="Go to Reports"
                  className="w-full text-left"
                >
                  Reports
                </button>
              </li>
              <li className="p-4 border-b border-gray-400 hover:bg-gray-300">
                <button
                  onClick={() => renderComponent("logout")}
                  aria-label="Logout from the dashboard"
                  className="w-full text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="col-span-10 flex-1">
        <header className="p-4 bg-gray-100 border-b">
          <h1 className="text-2xl font-bold" aria-label="Dashboard Header">
            Dashboard
          </h1>
        </header>
        <main className="p-6" role="main">
          <section aria-live="polite" className="mb-6">
            <h1
              className="text-2xl font-bold"
              aria-label="Welcome message"
            >
              Welcome to your dashboard
            </h1>
          </section>
          <section
            className="w-full"
            aria-label="Content Section"
          >
            {renderedComponent === "summary" && <Summary />}
            {renderedComponent === "dashboard" && <Dashboard />}
            {renderedComponent === "reports" && <Reports />}
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
