import './App.scss';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
            <Layout />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
