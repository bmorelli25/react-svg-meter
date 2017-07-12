// code created by Adam Mark
// https://gist.github.com/adammark/b9e0992dc6afaa72babdf52e38f228d4
import React from 'react';

var Meter = function (props) {
  var {
    percent = 0,         // a number between 0 and 1, inclusive
    width = 100,         // the overall width
    height = 10,         // the overall height
    rounded = true,      // if true, use rounded corners
    color = "#0078bc",   // the fill color
    animate = false,     // if true, animate when the percent changes
    label = null         // a label to describe the contents (for accessibility)
  } = props;

  var r = rounded ? Math.ceil(height / 2) : 0;
  var w = percent ? Math.max(height, width * Math.min(percent, 1)) : 0;
  var style = animate ? { "transition": "width 500ms, fill 250ms" } : null;

  return (
    <svg width={width} height={height} aria-label={label}>
      <rect width={width} height={height} fill="#ccc" rx={r} ry={r}/>
      <rect width={w} height={height} fill={color} rx={r} ry={r} style={style}/>
    </svg>
  );
};

export default Meter;
