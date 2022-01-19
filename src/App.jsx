import React, { useState, useRef } from "react";
import axios from "axios";
/* 
1. import the various components 
2. created compoments here first. only after they were completed then moved them to components folder
3. therefore axios + useRef imported here, cos they were used when the components were first created here
*/
import Form from "./components/form.jsx";
import { AddItems, AddPeople } from "./components/addItemsPeople.jsx";

const Calculate = ({ items, person }) => {
  const [total, setTotal]=useState(0)
  const calTotal = () => {
    let calTotal =0
    for (let i=0; i<items.length; i+=1){
      calTotal +=Number(items[i].price)
    }
    setTotal(calTotal)
    };
  const share = total/person.length
  return (
    <div id="calculateDiv">
      <button className="btn btn-success" onClick={calTotal}>
        Calculate
      </button>
      {total>0?<p><strong>This is the total amount ${total} total and ea person needs to pay ${share}</strong></p>:""}
    </div>
  );
};

export default function App() {
  /* useState for hafBill even tho it is not displayed cos want to trigger re-render on change in hafBill */
  const [hafBill, setHafBill] = useState();
  /* useState for these cos wanna sync display w change in these + make these avail to other components */
  const [items, setItems] = useState([]);
  const [person, setPerson] = useState([]);

  return (
    <div>
      <h1>Split my bill dude!</h1>
      {!hafBill ? (
        <Form setHafBill={setHafBill} />
      ) : (
        <div>
          <AddItems items={items} setItems={setItems} />
          <AddPeople person={person} setPerson={setPerson} />
          <Calculate items={items} person={person} />
        </div>
      )}
    </div>
  );
}
