import {
  addNewPerson,
  getPerson,
  getPersonWithID,
  UpdatePerson,
  deletePerson,
} from "../controllers/mernControllers";

const routes = (app) => {
  app.route("/persons").get(getPerson).post(addNewPerson); //post endpoint
  app
    .route("/person/:PersonId")
    .get(getPersonWithID)
    .put(UpdatePerson)
    .delete(deletePerson);
};

export default routes;
