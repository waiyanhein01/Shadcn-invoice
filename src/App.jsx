import React from "react";
import CheckoutForm from "./components/CheckoutForm";
import CheckoutList from "./components/CheckoutList";

const App = () => {
  return (
    <div className=" p-10 flex items-center justify-center">
      <div className="w-[800px]">
        <div className="">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-5">
            Invoice App
          </h1>
        </div>
        <CheckoutForm />
        <CheckoutList/>
      </div>
    </div>
  );
};

export default App;
