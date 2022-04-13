import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/:id" children={<Movie />} />
      <Route path="*" exact>
        <Home />
        <h1>Error 404, page not found!</h1>
      </Route>
    </Switch>
  );
}

export default App;
