import './App.css';
import React from 'react';

function getRandomHex() {
  let letters = '0123456789ABCDEF', color = '';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `
    rgb(${parseInt(result[1], 16)}, 
    ${parseInt(result[2], 16)}, 
    ${parseInt(result[3], 16)})
    ` : 'Ошибка!';
}

export default function App() {
  let [hex, setHex] = React.useState('#'+getRandomHex())
  let [rgb, setRgb] = React.useState(hexToRgb(hex))
  let [bgcolor, setBgcolor] = React.useState(hex)

  const handelhexChange = (e) => {
    if (e.target.value.length <= 1) return setHex('#');

    setHex(e.target.value)

    if (e.target.value.length === 7) {
      let color = hexToRgb(e.target.value)
      color === 'Ошибка!' ? setBgcolor('#ff3030') : setBgcolor(e.target.value);
      setRgb(color)
    }
  }

  return (
    <div className="App" style={{backgroundColor: `${bgcolor}`}}>
      <input className="input" type="text" value={hex} onChange={handelhexChange} maxLength='7'></input>
      <span className="output">{rgb}</span>
    </div>
  );
}

