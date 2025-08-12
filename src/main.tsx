import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/auth/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
