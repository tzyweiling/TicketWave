import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const QuantityControl = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex text-center items-center lg:ml-5 sm:mr-5">
      <button
        className="bg-red-600 hover:bg-red-500 text-white w-7 h-7 font-bold"
        onClick={onDecrease}
      >
        -
      </button>
      <p className="mx-2 my-2 px-3 text-xl font-bold">{quantity}</p>
      <button
        className="bg-red-600 hover:bg-red-500 text-white w-7 h-7 font-bold"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

const Payment = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleConnect = () => {
    console.log("Connect Wallet");
  };

  const generateSeatNumbers = () => {
    const startSeatNumber = 10;
    const seatNumbers = Array.from(
      { length: quantity },
      (_, index) => startSeatNumber + index
    );
    return seatNumbers.join(", ");
  };

  const subtotal = (quantity * 288).toFixed(2);
  const operationalFee = (3).toFixed(2);
  const bookingFee = (quantity * 1).toFixed(2);
  const totalPrice = (
    parseFloat(subtotal) +
    parseFloat(operationalFee) +
    parseFloat(bookingFee)
  ).toFixed(2);

  return (
    <div>
      <Header />
      <div className="mb-56 mt-4">
        <div className="flex pb-10 sm:pl-5 lg:pl-10">
          <div className="flex w-1/2">
            <Link to="/Homepage">
              <ArrowLeftIcon className=" text-black h-8 w-8 mr-5" />
            </Link>
            <p className="text-2xl font-bold">Shopping Cart</p>
          </div>
          <div className="w-1/2 flex justify-end mr-5 xl:justify-center ">
            <button
              onClick={handleConnect}
              className="bg-sky-700 hover:bg-sky-600 text-white rounded-xl py-2 px-8 font-bold"
            >
              Connect Wallet
            </button>
          </div>
        </div>

        <div className="flex mb-10 lg:ml-20 sm:ml-5">
          <img src="twice.png" alt="twice" className="w-40 h-40 mr-5" />
          <div>
            <p className="font-bold text-lg mb-5 sm:mr-10 md:mr-24 lg:mr-32">
              TWICE 5TH WORLD TOUR 'READY TO BE' IN SINGAPORE
            </p>
            <p className="font-semibold mb-2">Sat, 02 September 2023</p>
            <p className="font-semibold">Singapore National Stadium</p>
          </div>
          <div className="mt-14">
            <QuantityControl
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <Popup
              trigger={
                <button className=" sm:ml-2 lg:ml-7 text-red-600 hover:text-red-500 px-4 py-2 font-bold">
                  Remove
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="flex flex-col items-center text-center">
                  <ExclamationCircleIcon className="w-14 h-14 mt-8 text-gray-300" />
                  <div className="font-semibold text-xl mt-5 mb-10">
                    Are you sure want to remove this item?
                  </div>
                  <div>
                    <Link to="/Homepage">
                      <button className="mb-10 mr-1 sm:mr-3 lg:mr-5 rounded-xl font-semibold bg-red-600 px-7 py-3 text-white">
                        Yes, I'm sure
                      </button>
                    </Link>

                    <button
                      className="mb-10 ml-1 sm:ml-3 lg:ml-5 rounded-xl font-semibold bg-gray-200 px-7 py-3 text-gray-500"
                      onClick={close}
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>

        <div className="flex lg:ml-20 sm:ml-5">
          <div className="w-1/2 sm:mr-5">
            <table>
              <tbody>
                <tr>
                  <th className="font-semibold text-left">Seats</th>
                </tr>
                <tr>
                  <td>You have been assigned the following seats:</td>
                </tr>
                <tr>
                  <td className="pb-4">
                    Section: 220, Row: N, Seat(s): {generateSeatNumbers()}
                  </td>
                </tr>

                <tr>
                  <th className="font-semibold text-left">Ticket(s)</th>
                </tr>
                <tr>
                  <td className=" pb-4">{quantity} x Cat 2 Normal</td>
                </tr>

                <tr>
                  <th className="font-semibold text-left">Delivery</th>
                </tr>
                <tr>
                  <td>
                    E-ticket - E-ticket(s) are viewable via a link in your
                    confirmation email.
                  </td>
                </tr>
                <tr>
                  <td className="pb-20">
                    Please print & present your e-ticket(s) at the venue for
                    entry.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-1/2 h-full flex justify-center sm:mr-5 xl:justify-start">
            <table className="text-left bg-gray-300">
              <tbody>
                <tr>
                  <th
                    colSpan="2"
                    className="font-bold text-lg pt-4 pb-4 text-center"
                  >
                    Order Summary
                  </th>
                </tr>
                <tr>
                  <td className="pl-10 pb-2">Subtotal:</td>
                  <td className="text-right pb-2 pr-10">$ {subtotal}</td>
                </tr>
                <tr>
                  <td className="pl-10 pb-2">Booking Fee:</td>
                  <td className="text-right pb-2 pr-10">$ {bookingFee}</td>
                </tr>
                <tr>
                  <td className="pl-10 pb-2">Operational Fee:</td>
                  <td className="text-right pb-2 pr-10">$ {operationalFee}</td>
                </tr>
                <tr>
                  <td className="font-semibold pl-10 pt-3">Total Price:</td>
                  <td className="text-right font-semibold pt-3 pr-10">
                    $ {totalPrice}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center pt-6 pb-4">
                    <Link to="/PaymentSuccess">
                      <button className="bg-red-600 hover:bg-red-500 text-white rounded-xl sm:mx-16 sm:px-14 md:mx-24 lg:mx-14 lg:px-28 py-2 font-bold">
                        Checkout
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
