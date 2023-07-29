import React from 'react';
import Tooltip from './component/Tooltip';
import Screen from './component/screen/Screen';
import Options from './component/options/Options';
import "./App.css";

const App = () => {
  return (
    <>
    <div className='main'>  
       <Options/>
       <Screen className="screen"/>
    </div>
    </>
  );
};

export default App;
