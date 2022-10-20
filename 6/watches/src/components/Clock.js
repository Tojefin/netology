import React, {useEffect} from 'react';
import ReactClock from 'react-clock'
import 'react-clock/dist/Clock.css';

export default function Clock({timeOffSet}) {
  const [time, setTime] = React.useState()
  let timeout

  const tick = () => {
    var UTC = new Date().getTime() + (new Date().getTimezoneOffset() * 60000);
    var Local = new Date(UTC + (3600000*timeOffSet)).toLocaleTimeString();
    setTime(Local)

    timeout = window.setTimeout(tick, 1000)
  }

  useEffect(() => {
    tick()

    return () => {
      clearTimeout(timeout)
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ReactClock value={time}/>
    </>
  );
}