import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import auth0Client from "../authentication/Auth";

// Check how it renders and update with new CSS Library


class NavBar extends Component {
 signOut = () => {
   auth0Client.signOut();
   sessionStorage.clear()
   this.props.history.replace("/");
 };

 render() {
   return (
     <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
       {!auth0Client.isAuthenticated() ? (
        //  <button className="btn btn-success" onClick={auth0Client.signIn}>
        //    Sign In
        //  </button>
        null
       ) : (
         <React.Fragment>

           <ul className="nav nav-pills">
             <li className="nav-item">
               <Link className="nav-link" to="/recipes">
                 Recipe Library
               </Link>
               <Link className="nav-link" to="/meals4week">
               Meals for the Week
               </Link>
             </li>
           </ul>
           <div>
             <label className="mr-2 text-blue">
               {auth0Client.getProfile().name}
             </label>
             <button
               className="btn btn-danger"
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