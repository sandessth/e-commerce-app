import React, { useState } from "react";

function FreeShippingADV() {
  const [close, setClose] = useState("false");
  const HandleClick = () => {
    setClose("true");
  };

  if (close === "true") {
    return <></>;
  }
  return (
    <div
      className="bg-green-600 flex justify-around text-white p-2"
      onClick={() => HandleClick()}
    >
      <div>click to close</div>
      <div className="flex justify-center">
        Opening month offer: Free Shipping worldwide for limited time.
      </div>
      <div>click to close</div>
    </div>
  );
}

export default FreeShippingADV;
