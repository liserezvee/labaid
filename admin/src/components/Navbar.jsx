import { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);

  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    aToken  && setAToken("");
    aToken  && localStorage.removeItem("aToken");
  };
  return (
    <div className="flex justify-between items-center py-3 border-b bg-white sm:px-10">
      <div className="flex items-center">
        <img
          className="w-36 sm:w-40 cursor-pointer"
          src={assets.admin_logo}
          alt=""
        />
        <p className="border text-lg rounded-full px-2.5 py-0.5">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button onClick={logout} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
