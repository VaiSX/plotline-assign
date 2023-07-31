import React from 'react';
import "./tooltip.css" ;
import alert from "./../../images/alert-icon.png"

const Tooltip = (props) => {
  const propData  = props.props;

  const Aw = propData.Awidth;
  const Ah = propData.Aheight;
  
  const inlineStyles = {
    color: propData.textc,
    background: propData.background,
    padding: propData.padding,
    borderRadius: propData.radius,
    width: propData.Twidth,
    fontSize:propData.texts,
  };


  return (
    <div className="tool" style={inlineStyles}>
      <img src={alert}/>
      <h2>{propData.tooltiptxt || 'Hi this is a Tooltip'} </h2>
    </div>
  );
};

export default Tooltip;