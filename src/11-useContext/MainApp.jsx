import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { ErrorPage } from "./ErrorPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="404notfound" element={<ErrorPage />} />

        <Route path="/*" element={<Navigate to="/404notfound" />} />
      </Routes>
    </UserProvider>
  );
};
