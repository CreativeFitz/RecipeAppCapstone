import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import auth0Client from "../authentication/Auth";
import "./NavBar.css"

// Check how it renders and update with new CSS Library


class NavBar extends Component {
 signOut = () => {
   auth0Client.signOut();
   sessionStorage.clear()
   this.props.history.replace("/");
 };

 render() {
   return (
      <nav className="navbar navbar-default navbar-custom">
       {!auth0Client.isAuthenticated() ? (
        null
       ) : (
         <React.Fragment>

           <ul className="nav nav-pills">
             <li className="nav-item">
               <Link className="nav-link" to="/recipes">
                 Recipe Library
               </Link></li>
               <li>
               <Link className="nav-link" to="/meals4week">
               Meals for the Week
               </Link>
               </li>
               <li>
               <Link className="nav-link" to="/ingredientsList">
               Ingredients List
               </Link>
             </li>
           </ul>
           <div>
             <label className="userName">
               {auth0Client.getProfile().name}
             </label>
             <button
               className="btn"
               onClick={() => {
                 this.signOut();
               }}
             >
               Sign Out
             </button>
           </div>
         </React.Fragment>
       )}
     </nav>
   );
 }
}

export default withRouter(NavBar);