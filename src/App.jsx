import React from "react";
import CheckoutForm from "./components/CheckoutForm";
import CheckoutList from "./components/CheckoutList";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[800px] min-h-screen flex flex-col ">
        <Header/>
        <CheckoutForm />
        <CheckoutList/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
