import React, { useContext } from "react";
import Context from "../../Context";

function Payment() {
  const { details } = useContext(Context);

  return (
    <div>
      {details.bodyPart}
      {details.concerns.map((concern) => {
        <ul>
          Concern:
          <li>{concern}</li>
        </ul>;
      })}
      Time:
      {details.time}
      Price:
      {details.price}
      About:
    </div>
  );
}

export default Payment;
