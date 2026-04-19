import React from "react";

function Disclaimer() {
  return (
    <div className=" flex flex-col justify-center items-center px-4">
      <h1 className=" font-semibold my-4 underline decoration-accent text-2xl">
        Disclaimer
      </h1>
      ​
      <p className="w-4/5 md:w-2/4 text-center mb-7 italic font-semibold text-muted-foreground text-wrap">
        All product names, logos, and brands are property of their respective
        owners. All company, product and service names used in this website are
        for identification purposes only. Use of these names, logos, and brands
        does not imply endorsement.{" "}
      </p>
    </div>
  );
}

export default Disclaimer;
