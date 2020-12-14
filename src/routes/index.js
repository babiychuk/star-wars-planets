import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Root: {
    path: '/star-wars-planets',
    component: React.lazy(() =>
      import('../components/Pages/Planets' /* webpackChunkName: "Home" */),
    ),
  },
  SinglePlanet: {
    path: '/planet/', // :planetName
    component: React.lazy(() =>
      import('../components/Pages/SinglePlanet' /* webpackChunkName: "SinglePlanet" */),
    ),
  },
};

