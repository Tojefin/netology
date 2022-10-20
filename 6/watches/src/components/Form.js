import React from 'react';

export default function Form({addClock}) {
  let name = React.useRef()
  let timeOffSet = React.useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    addClock({name: name.current.value, timeOffSet: +timeOffSet.current.value})
  }

  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <input type='text' placeholder='Назнавание' ref={name} />
        <input type='number' max='24' min='-24' placeholder='Временная зона' ref={timeOffSet}/>
        <button>Добавить</button>
      </form>
    </>
  );
}