import LoginScreen from "./screens/LoginScreen";

import { Route, Routes } from "react-router";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import MessageScreen from "./screens/MessageScreen";
import AllEmails from "./screens/AllEmails";
import AllPassword from "./screens/AllPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Password" element={<AllPassword />} />
        <Route path="/Email" element={<AllEmails />} />
        <Route path="/InvalidLogin" element={<MessageScreen />} />
      </Routes>
    </div>
  );
}

export default App;
