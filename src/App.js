import "./App.css";
import Connector from "./layout/Connector";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListPage from "./modules/UserPage/UserListPage";
import CreateUserPage from "./modules/UserPage/CreateUserPage";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="ab"> */}
      <Connector />
      <div className="route_child">
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="create-user" element={<CreateUserPage />} />
        </Routes>
      </div>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
