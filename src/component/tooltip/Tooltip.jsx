import React from 'react';

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
    <div style={inlineStyles}>
      <h2>{propData.tooltiptxt}</h2>
      <h2>{propData.background}</h2>
    </div>
  );
};

export default Tooltip;