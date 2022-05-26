import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app"
import Header from "./header"

import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <div>
    <Header/>
  </div>
  <div className="App">
    <App/>
  </div>

</>
);