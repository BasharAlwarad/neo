import * as serviceWorker from './serviceWorker';
import { Neo4jProvider, createDriver } from 'use-neo4j';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Initialize the Neo4j driver
const driver = createDriver(
  'neo4j+s',
  '9f5fe3c9.databases.neo4j.io',
  7687,
  'neo4j',
  'mzN82XArYXdE96ePdStUVFArXbZJO5amtA_D3N7WRVQ'
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Neo4jProvider driver={driver}>
      <App />
    </Neo4jProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
