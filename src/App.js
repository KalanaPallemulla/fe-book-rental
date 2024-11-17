import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes/router";
import "./index.css";
function App() {
  const routing = useRoutes(routes);

  return routing;
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
