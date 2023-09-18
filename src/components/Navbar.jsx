import { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
  AiOutlineHome,
} from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { ShoppingCartOutlined } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalQTY,
  setGetTotals,
} from "../features/carts/CartSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, totalQTY, dispatch]);

  const navToggle = () => {
    setNav(!nav);
  };

  return (
    <div className="md:w-9/12 mx-auto flex justify-between items-center bg-white px-3 lg:px-0 py-2">
      {/* -------------Logo ---------------- */}
      <div className="flex items-center">
        <div className="cursor-pointer p-1 mr-2 hover:bg-gray-200 rounded-sm " onClick={navToggle}>
          <AiOutlineMenu size={25} />
        </div>
        <Link to={"/"} className="group flex gap-2 font-bold text-2xl md:text-3xl px-2">
          <span className="group-hover:text-purple-700">Food</span> <span className="text-purple-700 group-hover:text-blue-700">Store</span>
        </Link>
      </div>

      {/* ----------- Search Input ----------- */}
      <div className="hidden xl:flex items-center px-2 md:w-[300px] 3xl:w-[500px] bg-gray-50 drop-shadow-lg rounded-full ">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/* --------------- Nav for Destop --------------- */}
      <nav className="hidden md:flex gap-x-6 font-semibold bg-gray-50 text-purple-800 shadow-md rounded-3xl py-2 px-4">
        <Link to="/" className="hover:text-blue-800 font-semibold">
          Home
        </Link>
        <Link
          to="/foodpage"
          state={20}
          className="hover:text-blue-800  font-semibold"
        >
          Foods
        </Link>
        <Link to="/login" className="hover:text-blue-800  font-semibold">
          Login
        </Link>
      </nav>

      {/*-------------- Shop Cart -------------- */}
      <Link
        to="/carts"
        className="btn flex items-center justify-center py-2 px-4 rounded-full"
      >
        <Badge badgeContent={totalQTY} color="primary">
          <ShoppingCartOutlined />
        </Badge>
        <span className="ml-2">Cart</span>
      </Link>

      {/*------------------ Mobile Menu & Side drawer menu------------------ */}
      {/* Overlay */}
      {nav ? (
        <div
          onClick={navToggle}
          className="bg-black/50 fixed w-full h-screen z-10 top-0 left-0"
        />
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[250px] h-screen bg-white z-20 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={navToggle}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <div className="p-4 flex flex-col border-4 border-b-gray-200 gap-y-3">
            <Link
              to="/"
              onClick={navToggle}
              className="flex text-xl active:text-blue-600  hover:text-blue-800"
            >
              <AiOutlineHome size={25} className="mr-4" />
              Home
            </Link>
            <Link
              to="/foodpage"
              onClick={navToggle}
              state={20}
              className=" text-xl active:text-blue-600  hover:text-blue-800"
            >
              <AppRegistrationIcon size={25} className="mr-4" />
              Foods
            </Link>
            <Link
              to="/login"
              onClick={navToggle}
              className=" text-xl active:text-blue-600  hover:text-blue-800"
            >
              <LoginIcon size={25} className="mr-4" />
              Login
            </Link>
          </div>
          <ul className="flex flex-col p-4 text-gray-800 gap-y-3">
            <li className="text-xl flex gap-5">
              <TbTruckDelivery size={25} />
              <Link to="/login" className="text-xl ">
                Orders
              </Link>
            </li>
            <li className="text-xl flex gap-5">
              <MdFavorite size={25} />
              <Link
                to="/foodPage"
                state={20}
                onClick={navToggle}
                className="text-xl "
              >
                Favorites
              </Link>
            </li>
            <li className="text-xl flex gap-5">
              <FaWallet size={25} />
              <Link
                to="/foodPage"
                state={20}
                onClick={navToggle}
                className="text-xl "
              >
                Wallet
              </Link>
            </li>
            <li className="text-xl flex gap-5">
              <MdHelp size={25} /> Help
            </li>
            <li className="text-xl flex gap-5">
              <AiFillTag size={25} /> Promotions
            </li>
            <li className="text-xl flex gap-5">
              <BsFillSaveFill size={25} /> Best Ones
            </li>
            <li className="text-xl flex gap-5">
              <FaUserFriends size={25} /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
