import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import routes from "../../routes";

import Header from "../Base/Header";
import Modal from "../Base/Modal";

import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  const { isModal } = useSelector(state => state.modal);
  return (
    <>
    {isModal && <Modal />}
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
              <Route
                path={`${routes.SinglePlanet.path}:planetName`}
                component={routes.SinglePlanet.component}
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
