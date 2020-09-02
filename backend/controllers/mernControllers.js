import mongoose from "mongoose";
import { MernSchema } from "../models/mernModels";

const Person = mongoose.model("Person", MernSchema);

export const addNewPerson = (req, res) => {
  let newPlayer = new Person(req.body);

  newPlayer.save((err, Person) => {
    if (err) {
      res.send(err);
    }
    res.json(Person);
  });
};
