import { useRoutes } from "react-router-dom";
import Testroutes from "./routes/Router";

const App = () => {
  const routing = useRoutes(Testroutes);

  return <div className="dark">{routing}</div>;
};

export default App;
