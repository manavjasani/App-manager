// import { Navigate } from "react-router";
// import Connector from "./layout/Connector";
// import DashboardPage from "./modules/DashboardPage/DashboardPage";
// import LoginPage from "./modules/LoginPage/LoginPage";
// import CreateUserPage from "./modules/UserPage/CreateUserPage";
// import EditUserPage from "./modules/UserPage/EditUserPage";
// import UserListPage from "./modules/UserPage/UserListPage";

// const getRoutes = (user) => [
//   {
//     path: "/",
//     element: !user ? <LoginPage /> : <Navigate to="/dashboard" />,
//     children: [
//       { path: "/login", element: <LoginPage /> },
//       { path: "/", element: <Navigate to="/login" /> },
//     ],
//   },
//   {
//     path: "/",
//     element: user ? <Connector /> : <Navigate to="/login" />,
//     children: [
//       { path: "dashboard", element: <DashboardPage /> },
//       { path: "/users", element: <UserListPage /> },
//       { path: "/create-user", element: <CreateUserPage /> },
//       { path: "/users/edit-user/:i", element: <EditUserPage /> },
//     ],
//   },
// ];

// export default getRoutes;
