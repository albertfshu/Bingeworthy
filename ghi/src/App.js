import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
