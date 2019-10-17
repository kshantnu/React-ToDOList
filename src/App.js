import React from 'react';

// import { Provider } from "react-redux";
// import  store  from "./store/config/createStore";
import RouteConfig from './routes/RouteConfig';

import './appstyles/App.scss';

function App() {
  return (
   
    <div className="App">
      <header className="header">
        <div className="title">
          <span>My favourite GoTo List</span>
        </div>
      </header>
      <section className="main">
      <RouteConfig/>
      {/* <Provider store={store}>
        <RouteConfig/>
      </Provider> */}
      </section>
    </div>
   
  );
}

export default App;
