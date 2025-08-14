import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/auth/AuthProvider";
import { NarutoProvider } from "./context/naruto/NarutoProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NarutoProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </NarutoProvider>
    </BrowserRouter>
  </StrictMode>
);
