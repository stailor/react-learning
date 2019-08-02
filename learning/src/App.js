import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import LoggedOut from './components/logged-out';
import LoggedIn from './components/logged-in';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">        
        <Route path="/logged-in" exact component={LoggedIn} />
        <Route path="/logged-out" exact component={LoggedOut} />

        <LoggedOut/>
      </div>
    </BrowserRouter>
  );
}

export default App;
