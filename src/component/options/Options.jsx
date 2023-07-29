import React, { useState } from 'react';
import './Options.css';

const Form = () => {
  const [formData, setFormData] = useState({
    targetelem: '',
    tooltiptxt: '',
    texts: '',
    padding:'',
    textc:'',
    backgroud:'',
    radius:'',
    Twidth:'',
    Awidth:'',
    Aheight:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission or validation logic here
    console.log('Form data:', formData);
  };

  return (
    <div className='Container1'>
    <form>
      <div>
        <label htmlFor="targetelem">Target Element:</label>
        <select
          type="text"
          id="targetelem"
          name="targetelem"
          value={formData.targetelem}
          onChange={handleChange}
        >
          <option value="Button1">Button 1</option>
          <option value="Button2">Button 2</option>
          <option value="Button3">Button 3</option>
          <option value="Button4">Button 4</option>
          <option value="Button5">Button 5</option>
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
        />
      </div>
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
      <div> 
        <label htmlFor="textc">Text Colour:</label>
        <input
          type="text"
          id="textc"
          name="textc"
          value={formData.textc}
          onChange={handleChange}
        />
      </div>
      <div> 
        <label htmlFor="background">Backgroud Colour:</label>
        <input
          type="text"
          id="background"
          name="background"
          value={formData.backgroud}
          onChange={handleChange}
        />
      </div>
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
    </form>
    </div>
  );
};

export default Form;
