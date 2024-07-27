import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import loginUser from "../services/authentication";

const useLogin = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(token != null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);

    try {
      const response = await loginUser(email, password);
      const status = response.status;
      console.log(response);
      const data = JSON.parse(response.data);

      if (status === 201) {
        setIsLoggedIn(true);
        sessionStorage.setItem("token", data.access_token);
        navigate("/dashboard");
      } else {
        // toast.error(data.detail);
        sessionStorage.removeItem("token");
      }
    } catch (err) {
      // toast.error("An error occurred. Please try again.");
      sessionStorage.removeItem("token");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("token");
    window.location.href = "/auth";
  };

  const getToken = () => {
    return token || "";
  };

  const isTokenExist = () => {
    return token != null;
  };

  const decodedToken = () => {
    if (!getToken()) {
      return { user_id: null };
    }
    return jwtDecode(getToken());
  };

  return {
    isLoggedIn,
    isLoading,
    login,
    logout,
    setIsLoggedIn,
    getToken,
    isTokenExist,
    decodedToken,
  };
};

export default useLogin;
