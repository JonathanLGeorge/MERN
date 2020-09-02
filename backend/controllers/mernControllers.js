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

export const getPerson = (req, res) => {
  Person.find((err, Person) => {
    if (err) {
      res.send(err);
    }
    res.json(Person);
  });
};

export const getPersonWithID = (req, res) => {
  Person.findById(req.params.PersonId, (err, Person) => {
    if (err) {
      res.send(err);
    }
    res.json(Person);
  });
};

export const UpdatePerson = (req, res) => {
  Person.findOneAndUpdate(
    { _id: req.params.PersonId },
    req.body,
    { new: true },
    (err, Person) => {
      if (err) {
        res.send(err);
      }
      res.json(Person);
    }
  );
};

export const deletePerson = (req, res) => {
  Person.remove({ _id: req.params.PersonId }, (err, Person) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Delete successful" });
  });
};
