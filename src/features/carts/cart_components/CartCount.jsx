import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const CartCount = ({ totalQTY, onClearCartItems }) => {
  return (
    <div className=" fixed z-10 top-0 w-full md:w-9/12 bg-gray-800 text-white h-12 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex md:gap-2 items-center cursor-pointer hover:text-orange-500 ">
          <KeyboardDoubleArrowLeftIcon className="w-5 h-5 stroke-[2]" />
          Back
        </Link>
      </div>
      <div className="grid items-center">
        <h4 className="flex lg:gap-4 text-base lg:text-xl">
         <span className="hidden md:flex">
         Total -
         </span>
          <span>
            ({totalQTY} Items)
          </span>
        </h4>
      </div>
      <div className="flex gap-1 lg:gap-3 items-center">
        <h4 className=" text-sm lg:text-xl">Delete All</h4>
        <button
          type="button"
          onClick={onClearCartItems}
          className="rounded bg-gray-900  p-1"
        >
          <DeleteIcon className="w-5 h-5  hover:text-orange-500 " />
        </button>
      </div>
      <Link to="/" className="flex items-center">
        <button
          type="button"
          className="rounded bg-gray-950 active:scale-90 p-0.5"
        >
          <CloseIcon className="w-5 h-5 text-white stroke-[2]  hover:text-orange-500 " />
        </button>
      </Link>
    </div>
  );
};

export default CartCount;
