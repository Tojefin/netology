import React from 'react';
import List from './components/List';
import Details from './components/Details';
import './App.css';

export default function App() {
  const [state, setState] = React.useState({
    list: [],
    active: null
  });

  const activeHandler = (elm) => {
    setState({...state, active: elm})
  }

  React.useEffect(() => {
    setState({...state, list: [{name:'loading'}]})
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then(raw => raw.json())
    .then(data => setState({...state, list: data}))
  }, []); //eslint-disable-line

  return (
    <div className="App">
      <List list={state.list} active={state.active} activeHandler={activeHandler}/>
      <Details info={state.active}/>
    </div>
  );
}
