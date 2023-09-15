import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setGetTotals,
} from "./CartSlice.js";
import CartCount from "./cart_components/CartCount";
import CartEmpty from "./cart_components/CartEmpty";
import CartItem from "./cart_components/CartItem";

const Carts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, totalQTY, dispatch]);

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  return (
    <div className="bg-gray-300 md:w-9/12 mx-auto shadow-lg">
      <div className=" bg-white">
        {/*-------------- cart header-------------- */}
        <CartCount totalQTY={totalQTY} onClearCartItems={onClearCartItems} />

        {/* if cart empty */}
        {cartItems?.length === 0 ? (
          <CartEmpty />
        ) : (
          // -----------------cart center-----------------//
          <div className="flex flex-col items-center gap-y-4 py-3 mt-14 mb-16 w-full mx-auto">
            {cartItems?.map((item, i) => (
              <CartItem key={i} item={item} />
            ))}
          </div>
        )}
        {/*---------------- cart footer---------------- */}
        <div className="fixed bottom-0 w-full md:w-9/12 bg-gray-800 text-white h-16">
          <div className="flex h-full items-center justify-between w-8/12 md:w-6/12 mx-auto ">
            <h4 className="text-base font-semibold uppercase">Total</h4>
            <p className="hidden xl:flex text-cente ">
              Taxes and Shipping Will Calculate At Shipping
            </p>
            <p className="text-lg font-bold py-0.5">
              ${totalAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
