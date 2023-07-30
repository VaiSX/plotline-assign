import React from 'react';
import Tooltip from '../tooltip/Tooltip';

import './Screen.css';

const center = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
};

const Screen = () => {
  return (
    <div className="mobile-screen">
    <button className="" style={{top:20,left:20}}>Button 1</button>
    <button className="" style={{right:20 ,top:20}}>Button 2</button>
    <button className="" style={center}>Button 3</button>
    <button className="" style={{bottom:20,left:20}}>Button 4</button>
    <button className="" style={{bottom:20,right:20}}>Button 5</button>
    </div>
  );
};

export default Screen;
