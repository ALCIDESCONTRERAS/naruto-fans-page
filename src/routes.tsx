import { Route, Routes } from "react-router";

import { RootLayout } from "./layouts/Root.layout";
import { PublicLayout } from "./layouts/Public.layout";
import { AuthLayout } from "./layouts/Auth.layout";
import { AdminLayout } from "./layouts/Admin.layout";

import { DashboardPage } from "./pages/admin/Dashboard.page";
import { NotFoundPage } from "./pages/Public/NotFound.page";
import { LoginPage } from "./pages/Auth/Login.page";
import { RegisterPage } from "./pages/Auth/Register.page";
import { ProfilePage } from "./pages/admin/Profile.page";
import HomePage from "./pages/Public/Home.page";
import Characters from "./pages/naruto/Characters.page";
import AkatsukiPage from "./pages/naruto/Akatsuki.page";
import TailedBeastPage from "./pages/naruto/TailedBeasts.page";
import VillagePage from "./pages/naruto/Village.page";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Public */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* auth */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* admin */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="characters" element={<Characters />} />
          <Route path="akatsukis" element={<AkatsukiPage />} />
          <Route path="tailed-beasts" element={<TailedBeastPage />} />
          <Route path="villages" element={<VillagePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
