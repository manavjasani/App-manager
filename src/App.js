import "./App.css";
import Connector from "./layout/Connector";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListPage from "./modules/UserPage/UserListPage";
import CreateUserPage from "./modules/UserPage/CreateUserPage";
import EditUserPage from "./modules/UserPage/EditUserPage";
import LoginPage from "./modules/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/" element={<LoginPage />} /> */}

      <Connector />
      <div className="route_child">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="users" element={<UserListPage />} />
          <Route path="create-user" element={<CreateUserPage />} />
          <Route path="users/edit-user/:i" element={<EditUserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
