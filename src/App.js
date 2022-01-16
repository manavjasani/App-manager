import "./App.css";
import Connector from "./layout/Connector";
import { BrowserRouter } from "react-router-dom";
import UserListPage from "./modules/UserPage/UserListPage";
import CreateUserPage from "./modules/UserPage/CreateUserPage";
import EditUserPage from "./modules/UserPage/EditUserPage";
import LoginPage from "./modules/LoginPage/LoginPage";
import { useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router";
import DashboardPage from "./modules/DashboardPage/DashboardPage";
import ListAppPage from "./modules/AppPage/ListAppPage";
import CreateAppPage from "./modules/AppPage/CreateAppPage";
import EditAppPage from "./modules/AppPage/EditAppPage";
import AppDetailPage from "./modules/AppPage/AppDetailPage";

function App() {
  const userAuth = useSelector((state) => state.login.isUser);

  const routing = useRoutes([
    {
      path: "/",
      element: !userAuth ? <LoginPage /> : <Navigate to="/dashboard" />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "/", element: <Navigate to="/login" /> },
      ],
    },
    {
      path: "/",
      element: userAuth ? <Connector /> : <Navigate to="/login" />,
      children: [
        { path: "dashboard", element: <DashboardPage /> },
        { path: "users", element: <UserListPage /> },
        { path: "create-user", element: <CreateUserPage /> },
        { path: "users/edit-user/:i", element: <EditUserPage /> },

        { path: "applications", element: <ListAppPage /> },
        { path: "create-application", element: <CreateAppPage /> },
        { path: "applications/edit-application/:i", element: <EditAppPage /> },
        { path: "applications/:i", element: <AppDetailPage /> },
      ],
    },
  ]);

  return <>{routing}</>;

  // if (!userAuth) {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<LoginPage />} />
  //     </Routes>
  //   );
  // }

  // return (
  //   <BrowserRouter>
  //     {/* <Route path="/" element={<LoginPage />} /> */}
  //     {!userAuth && (
  //       <Routes>
  //         <Route path="/" element={<LoginPage />} />
  //       </Routes>
  //     )}
  //     <Connector />
  //     <div className="route_child">
  //       <Routes>
  //         <Route path="/" index element={<UserListPage />} />
  //         <Route path="/users" element={<UserListPage />} />
  //         <Route path="/create-user" element={<CreateUserPage />} />
  //         <Route path="users/edit-user/:i" element={<EditUserPage />} />
  //       </Routes>
  //     </div>
  //   </BrowserRouter>
  // );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
