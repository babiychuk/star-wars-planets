import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../../routes";
import Header from "../Base/Header";
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <>
    <Header />
    <CssBaseline />
      <main>
        <section>
          <Suspense fallback={null}>
            <Switch>
              <Route
                path={routes.Root.path}
                component={routes.Root.component}
              />

              <Redirect to={routes.Root.path} />
            </Switch>
          </Suspense>
        </section>
      </main>
    </>
  );
};

export default App;
