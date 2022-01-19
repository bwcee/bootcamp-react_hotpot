import React, { useState, useRef } from "react";
import axios from "axios";

const AddPeople = ({person, setPerson}) => {
  const personRef = useRef();
  
  const submitPerson = () => {
    if (!personRef.current.value) {
      return alert("Eh dun liddat leh... key in name leh!");
    }
    setPerson([...person, personRef.current.value]);
    /* only need to post the last person in the array to database */
    axios
      .post("/person", {
        person: personRef.current.value,
        billId: localStorage.getItem("billId"),
      })
      .then((createdPerson) => {
        console.log("This is createdPerson", createdPerson);
      });

    /* reset input box to empty */
    personRef.current.value = "";
  };
  console.log("This is person array", person)

  const displayPeople = person.map((el, index) => {
    return <li key={index}>{el}</li>;
  });

  return (
    <div>
      <label>
        Input person name:
        <input type="text" ref={personRef} />
        <input type="submit" value="Submit" onClick={submitPerson} />
      </label>
      <ol>{displayPeople}</ol>
    </div>
  );
};

const AddItems = ({ items, setItems }) => {
  const itemRef = useRef();
  const priceRef = useRef();

  const submitItems = () => {
    if (!itemRef.current.value || !priceRef.current.value) {
      return alert("Eh dun liddat leh... key in everything leh!");
    }
    /* manipulating items directly but updating immediately w setItems, so shld be ok */
    items.push({ item: itemRef.current.value, price: priceRef.current.value });
    setItems([...items]);
    /* reset input boxes to empty */
    itemRef.current.value = "";
    priceRef.current.value = "";
  };

  const displayItems = items.map((el, index) => {
    return (
      <li key={index}>
        {el.item}, ${el.price}
      </li>
    );
  });

  return (
    <div>
      <label>
        Input item:
        <input type="text" ref={itemRef} />
      </label>
      <label>
        Input price:
        <input type="number" ref={priceRef} />
        <input type="submit" value="Submit" onClick={submitItems} />
      </label>
      <ol>{displayItems}</ol>
    </div>
  );
};

export {AddItems, AddPeople}