import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import ListComponent from "./ListComponent";
import Page1 from "./page1";
function Router() {
   return (
      <div>
         <Switch>
            <Route path="/page1" component={Page1} />
            <Route path="/list-page" component={ListComponent} />
            <Route path="*" component={Home} />
         </Switch>
      </div>
   );
}

export default Router;
