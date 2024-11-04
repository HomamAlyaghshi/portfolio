import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/aboutpage" exact component={AboutPage} />
          <Route path="/projectspage" exact component={ProjectsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
