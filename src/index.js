import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Display from './component/Display';

import Header from './component/Header';
import reportWebVitals from './reportWebVitals';
import Footer from './component/Footer';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Header/>
    <Display/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
