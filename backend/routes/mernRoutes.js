import { addNewPerson } from "../controllers/mernControllers";

const routes = (app) => {
  app.route("/persons").post(addNewPerson); //post endpoint
};

export default routes;
