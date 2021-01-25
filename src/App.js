import './App.css';
import Login from './Login';
import MobileList from './mobileList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
 <Router>
 <Switch>
 <Route path='/login' exact>
<Login />
</Route>

 <Route path='/phones' exact>
 <MobileList />
 </Route>

 
 </Switch>


 

 </Router>
 
    </div>
  );
}

export default App;
