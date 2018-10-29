import React from 'react';
// import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
// import App from './App';
import Food from './Food';
// import Home from './Home';
import Profile from './Profile';
import ImageSlider from './ImageSlider';
import About from './About';
import Clothing from './Clothing';
import Footwear from './Footwear';
// import { Link, Redirect } from 'react-router-dom';  

class Routes extends React.Component{
  constructor(props){
    super(props)
    this.state={
      buttonClick :false,
      clicked: this.props.clicked
    }
    
  }
  onButtonClick = (e) =>{
    this.setState({
      buttonClick: true
    })
    console.log("Buy Now Clicked")
  }
   render(){

     if  (!this.props.isLoginSuccess) {
    
        if(!this.state.clicked)
       return (<Route path="*" component= { ImageSlider }></Route>)
     }
       return(
       <Switch>
          <Route path = "/Login" component = {Login} />  
          <Route exact path = "/" component = { Profile } />   
          {/* use render function for redirecting to authenticated */}
          <Route path = "/Profile" component = {Profile} /> 
          {/* <Route path = "/ImageSlider" component = {ImageSlider} />  */}
          <Route path = "/Food" component = {Food} />   
          <Route path = "/Clothing" render = {() => {<Clothing onClick={this.onButtonClick} buttonClick={this.buttonClick}/>}} />   
          <Route path = "/Footwear" component = {Footwear} />   
          <Route path = "/About" component = {About} />   
        </Switch>
       )}
}
// create one global function and use it for each component
// try to pass buttonOnclick function with props thru app.js and send the info to links just as done in redirect
export default Routes;
//connect to store

