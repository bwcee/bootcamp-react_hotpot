import React, { useState, useRef } from "react";
import axios from "axios";

const Form = ({ setHafBill }) => {
  const billRef = useRef();

  const submitBill = () => {
    if (!billRef.current.value) {
      return alert("Key in a bill name doofus!");
    }
    /* 
    1. create new bill entry in bills table + store bill_id in local storage 
    2. trigger rendering of nxt part of app
    */
    axios.post("/home", { bill: billRef.current.value }).then((createdBill) => {
      console.log(createdBill);
      localStorage.setItem("billId", createdBill.data.id);
      setHafBill("haf bill");
    });
  };

  return (
    <div>
      <label>
        Input bill name:
        <input type="text" ref={billRef} />
        <input type="submit" value="Submit" onClick={submitBill} />
      </label>
    </div>
  );
};

export default Form