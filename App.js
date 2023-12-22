import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Payment />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
    </Routes>
  );
}

export default App;
