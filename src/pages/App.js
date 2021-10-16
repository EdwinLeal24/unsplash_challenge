import "./App.css";
import React, { Suspense } from "react";
import { AppProvider } from "../context/AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import router from "../routing/router";

function App() {
  return (
    <AppProvider>
      <Router>
        <Suspense fallback={false}>
          <Switch>
            {router.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.isExact}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </AppProvider>
  );
}
export default App;
