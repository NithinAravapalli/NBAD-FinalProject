import React from "react";
import pic from "/read-note.svg";
import api from "../lib/api";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/n54/auth/login`, {
        username: email,
        password: password,
      });
      window.localStorage.setItem("isAuthenticated", true);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex max-w-4xl w-full shadow-lg bg-white rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-5">
          <div className="flex flex-col items-center justify-center">
            <img
              src={pic}
              alt="Read a note illustration"
              className="mb-5"
              role="img"
              aria-label="Recent innovations in Generative AI"
            />
            <h3 className="yuji-mai-regular text-emerald-500 text-3xl text-center">
              Recent innovations in Generative AI
            </h3>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-1/2 border-l border-gray-300 p-10">
          <main role="main" className="w-full">
            <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
            <form
              className="w-full"
              onSubmit={handleLogin}
              role="form"
              aria-labelledby="login-form"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  User Name
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  aria-required="true"
                  aria-label="Email Address"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  aria-required="true"
                  aria-label="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  aria-label="Login Button"
                >
                  Login
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
