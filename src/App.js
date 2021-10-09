import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/restaurant/:id">
            <RestaurantPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
