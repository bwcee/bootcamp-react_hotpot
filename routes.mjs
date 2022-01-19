import { resolve } from "path";
import db from "./models/index.js";

export default function routes(app) {
  // special JS page. Include the webpack index.html file
  app.get("/home", (req, res) => {
    res.sendFile(resolve("dist", "main.html"));
  });
  /* create new bill */
  app.post("/home", (req, res) => {
    const { bill } = req.body;
    try {
      db.Bill.create({ bill }).then((createdBill) => {
        res.send(createdBill);
      });
    } catch (err) {
      res.send(err);
    }
  });
  /* create new person */
  app.post("/person", (req, res) => {
    const { person, billId } = req.body;
    try {
      db.Person.create({ person, billId }).then((createdPerson) => {
        res.send(createdPerson);
      });
    } catch (err) {
      res.send(err);
    }
  });
}
