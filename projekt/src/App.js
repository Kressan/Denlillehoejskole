import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Langekurser from './components/views/langekurser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
          <Route path="/">
            <Langekurser />
          </Route>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
