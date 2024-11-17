import clientRoutes from "./client.router";

import NotFound from "../pages/NotFound";

const routes = [...clientRoutes, { path: "*", element: <NotFound /> }];

export default routes;
