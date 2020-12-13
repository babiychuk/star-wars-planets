import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../../routes";
import Header from "../Base/Header";

const App = () => {
  return (
    <>
    <Header />
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
