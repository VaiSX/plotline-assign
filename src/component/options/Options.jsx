import React, { useContext, useState } from 'react';
import Tooltip from '../tooltip/Tooltip';
import './Options.css';

const center = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
};

//Map of objects

const cssMap = new Map();

//FORM

const Form = () => {
  const [button,setButton] = useState('B3');

  const [formData, setFormData] = useState({
    tooltiptxt: 'ToolTip',
    texts: '10px',
    padding:'5px',
    textc:'white',
    background:'black',
    radius:'10px',
    Twidth:'100px',
    Awidth:'3px',
    Aheight:'0px'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    cssMap.set(button,{...formData});
    console.log(cssMap.get(button));
  };

  const handleChange2 = (event) =>{
    const { name, value } = event.target;
    setButton(value);
  };

  return (
    <>
                                                {/* FORM */}
    <div className='container1'>
    <form>
      <div>
        <label htmlFor="buttonName">Target Element:</label>
        <select
          type="text"
          id="buttonName"
          name="buttonName"
          value={button.buttonName}
          onChange={handleChange2}
          style={{width:660}}

        >
          <option value="B1">Button 1</option>
          <option value="B2">Button 2</option>
          <option value="B3">Button 3</option>
          <option value="B4">Button 4</option>
          <option value="B5">Button 5</option>
        </select>
      </div>
      <div> 
        <label htmlFor="tooltiptxt">Tooltip text:</label>
        <input
          type="text"
          id="tooltiptxt"
          name="tooltiptxt"
          value={formData.tooltiptxt}
          onChange={handleChange}
          style={{width:660}}
        />
      </div>
      <div style={{display:'flex' , gap:'50px'}}>
      <div> 
        <label htmlFor="texts">Text Size:</label>
        <input
          type="text"
          id="texts"
          name="texts"
          value={formData.texts}
          onChange={handleChange}
        />
      </div>
      <div> 
        <label htmlFor="padding">Padding:</label>
        <input
          type="text"
          id="padding"
          name="padding"
          value={formData.padding}
          onChange={handleChange}
        />
      </div>
      </div>
      <div> 
        <label htmlFor="textc">Text Colour:</label>
        <input
          type="text"
          id="textc"
          name="textc"
          value={formData.textc}
          onChange={handleChange}
          style={{width:660}}
        />
      </div>
      <div> 
        <label htmlFor="background">Backgroud Colour:</label>
        <input
          type="text"
          id="background"
          name="background"
          value={formData.background}
          onChange={handleChange}
          style={{width:660}}
        />
      </div>
      <div style={{display:'flex',gap:'50px'}}>
      <div> 
        <label htmlFor="radius">Corner Radius:</label>
        <input
          type="text"
          id="radius"
          name="radius"
          value={formData.radius}
          onChange={handleChange}
        />
      </div>
      <div> 
        <label htmlFor="Twidth">Tooltip Width:</label>
        <input
          type="text"
          id="Twidth"
          name="Twidth"
          value={formData.Twidth}
          onChange={handleChange}
        />
        </div>
      </div>
      <div style={{display:'flex',gap:'50px'}}>
      <div> 
        <label htmlFor="Awidth">Arrow Width:</label>
        <input
          type="text"
          id="Awidth"
          name="Awidth"
          value={formData.Awidth}
          onChange={handleChange}
        />
      </div>
      <div> 
        <label htmlFor="Aheight">Arrow Height:</label>
        <input
          type="text"
          id="Aheight"
          name="Aheight"
          value={formData.Aheight}
          onChange={handleChange}
        />
      </div>
      </div>
    </form>
    </div>


    {/* SCREEN */}

    <div className="mobile-screen">
      <div className={button}>
      <Tooltip props={formData}/>
      </div>
    <button className="" style={{top:20,left:20}}>Button 1</button>
    <button className="" style={{right:20 ,top:20}}>Button 2</button>
    <button className="" style={center}>Button 3</button>
    <button className="" style={{bottom:20,left:20}}>Button 4</button>
    <button className="" style={{bottom:20,right:20}}>Button 5</button>
    </div>

    </>
  );
};

export default Form;
