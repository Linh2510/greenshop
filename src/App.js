import React from 'react';
import Header from './component/layout/Header';
import Footer from './component/layout/footer';
import './App.css';

function App(props) {
  return (
    <div >
       <Header />
      
        {props.children}
    
       <Footer />
    </div>
  );
}

export default App;
