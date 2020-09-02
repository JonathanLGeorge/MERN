import {
  addNewPerson,
  getPerson,
  getPersonWithID,
  UpdatePerson,
} from "../controllers/mernControllers";

const routes = (app) => {
  app.route("/persons").get(getPerson).post(addNewPerson); //post endpoint
  app.route("/person/:PersonId").get(getPersonWithID).put(UpdatePerson);
};

export default routes;
