// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchData } from './api';
import Layout from './Layout.js';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <Layout>
        <p>Hello World!</p>
      </Layout>
    </div>
  );
}

export default App;