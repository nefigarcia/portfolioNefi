import React from 'react';
//import logo from './logo.svg';
import Particles from './components/Particles';
import './App.css';
import Particles2 from './components/Particles2';
import Load from './components/pages/Load'; 
import {Switch, Route,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './components/pages/Inicio';
import Details from './components/pages/Details';


/*export default class App{
  constructor(){}
  init(){
    this.draw();
  }
  draw(){
    this.components=new Load(this);
   //this.components=new Particles2(this);
    //this.components=new Particles(this);

  }
}*/
function App(){
  return(
  <div>
    <Switch>
      <Route exact path="/" component={Load}/>
      <Route path="/Particles2" component={Particles2}/>
      <Route path="/Inicio" component={Inicio}/>
      <Route path='/Details' component={Details}/>
    </Switch>
  </div>
  );
}
export default App;