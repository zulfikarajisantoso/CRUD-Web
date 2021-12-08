import Home from "./component/Home";
import Navcom from "./component/Navcom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Add from "./component/Add";
import Edit from "./component/Edit";

function App() {

  return (
    <div className="App ">
      <div className="container">
      <BrowserRouter>
      <Navcom />
        <Route exact path="/" component={Home}/> 
        <Route path="/add" component={Add}/> 
        <Route path="/edit/:id" component={Edit}/>
      </BrowserRouter>

     
       
               
      </div>
    </div>
  );
}

export default App;
