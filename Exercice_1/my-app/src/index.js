import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/style.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

/*
import App from './App'
import Sandbox from './Sandbox'
*/
import reportWebVitals from './reportWebVitals';


function Page(){
  return(
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />)

/*  INIT 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
