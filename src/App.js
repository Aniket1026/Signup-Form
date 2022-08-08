import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

import Form from './component/Form/Form';
import Submit from './component/Form-Submit/Submit';
import Thankyou from './component/Form-Submit/Thankyou';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path='/' element={<Form/>} />
          <Route exact path='/submit' element={<Submit />} />  
          <Route exact path='/Thankyou' element={<Thankyou/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
