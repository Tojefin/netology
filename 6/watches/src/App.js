import React from 'react';
import Clock from './components/Clock';
import Form from './components/Form';
import './App.css';

export default function App() {
  const [clocks, setClocks] = React.useState([
    {name: 'Moscow', timeOffSet: 3},
    {name: 'Samara', timeOffSet: 4},
    {name: 'London', timeOffSet: 1}
  ]);

  const addClock = ({name, timeOffSet}) => {
    if (clocks.filter((el) => el.name === name)[0] || !name) return
    console.log(name, timeOffSet)
    setClocks([...clocks, {name: name, timeOffSet: timeOffSet}])
  }
  const removeClock = (name) => {
    setClocks([...clocks.filter((el) => el.name !== name)])
  }

  return (
    <div className="App">
      <Form addClock={(arg) => addClock(arg)}/>
      <div className='clockList'>
        {clocks.map((item) => {
          return (
              <div className='clockBlock' key={item.name}>
                <h2>{item.name}</h2>
                <button className='removeButton' onClick={() => removeClock(item.name)}>X</button>
                <Clock timeOffSet={item.timeOffSet}/>
              </div>
            )
        })}
      </div>
    </div>
  );
}