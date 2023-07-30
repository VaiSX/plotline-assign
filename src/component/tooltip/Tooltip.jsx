import React from 'react';
import "./tooltip.css"

const Tooltip = (props) => {
  const propData  = props.props;
  const color = propData.textc;
  const ts = propData.texts;
  const p = propData.padding;
  const bg = propData.background;
  const r = propData.radius;
  const tw = propData.Twidth;
  const Aw = propData.Awidth;
  const Ah = propData.Aheight;
  
  const inlineStyles = {
    color: color,
    background: bg,
    padding:p,
    borderRadius:r,
    width:tw,
    fontSize:ts,
  };

  return (
    <div className="tool {inlineStyles}" style={inlineStyles}>
      <h2>{propData.tooltiptxt || 'Hi this is a Tooltip'} </h2>
    </div>
  );
};

export default Tooltip;