import "./App.css";
import Connector from "./layout/Connector";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListPage from "./modules/UserPage/UserListPage";
import CreateUserPage from "./modules/UserPage/CreateUserPage";
import EditUserPage from "./modules/UserPage/EditUserPage";
import LoginPage from "./modules/LoginPage/LoginPage";
import { useSelector } from "react-redux";

function App() {
  const userAuth = useSelector((state) => state.login.isUser);
  console.log("userAuth", userAuth);

  // if (!userAuth) {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<LoginPage />} />
  //     </Routes>
  //   );
  // }

  return (
    <BrowserRouter>
      {/* <Route path="/" element={<LoginPage />} /> */}
      {!userAuth && (
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      )}
      <Connector />
      <div className="route_child">
        <Routes>
          {/* <Route path="/" element={<UserListPage />} /> */}
          <Route path="/users" element={<UserListPage />} />
          <Route path="create-user" element={<CreateUserPage />} />
          <Route path="users/edit-user/:i" element={<EditUserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
