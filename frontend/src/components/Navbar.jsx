import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-600">
        TaskFlow
      </h1>

      <div className="hidden md:flex gap-6 items-center">

        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link to="/dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>

        <Link to="/tasks" className="hover:text-blue-600">
          Tasks
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>

      </div>

      <button className="md:hidden">
        <Menu />
      </button>

    </nav>
  );
}

export default Navbar;