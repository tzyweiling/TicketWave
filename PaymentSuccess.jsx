import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div>
      <Header />
      <div style={{ backgroundImage: 'url("congrats.png")' }}>
        <div>
          <div className="flex flex-col items-center justify-center pt-56 pb-24">
            <div className="text-center">
              <h1 className=" sm:text-4xl xl:text-5xl font-bold mb-14">
                CONGRATULATIONS!!!
              </h1>
              <p className="text-lg font-semibold mb-3">
                You have successfully bought the tickets!
              </p>
              <p className="text-gray-500 mb-24">
                A confirmation email with your e-tickets has been sent to your
                email address.
              </p>

              <div className="items-center space-x-10">
                <Link to="/Eticket">
                  <button className="bg-indigo-800 hover:bg-indigo-500 text-white px-10 py-2.5 rounded-full font-semibold">
                    VIEW E-TICKET(S)
                  </button>
                </Link>
                <Link to="/Homepage">
                  <button className="bg-sky-950 hover:bg-indigo-500 text-white px-10 py-2.5 rounded-full font-semibold">
                    BACK TO HOMEPAGE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
