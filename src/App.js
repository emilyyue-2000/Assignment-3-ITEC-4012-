import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Navlink
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import {FurnitureHomePage} from './components/pages/HomePage'

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          
          <FurnitureHomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;