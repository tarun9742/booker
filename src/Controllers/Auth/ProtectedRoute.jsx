import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { CheckToken } from "./AuthController";
import { Loading1 } from "../../Componentes/Loading1";

export const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const mobile = Cookies.get("mobile");
      const token = Cookies.get("token");

      if (!token || !mobile) {
        // Redirect to login page without a full page reload
        return (window.location.href = "/login");
      }

      try {
        const response = await CheckToken();
        if (response.status !== true) {
          // Redirect to login page without a full page reload
          return (window.location.href = "/login");
        }
        setIsAuthenticated(true);
      } catch (error) {
        // Redirect to login page on error without a full page reload
        return (window.location.href = "/login");
      }
    };

    checkToken();
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="w-screen h-screen flex justify-center items-center m-auto ">
        <Loading1 />
      </div>
    );
  }

  return children;
};
