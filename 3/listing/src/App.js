import './App.css';
import Listing from './components/Listing'
import {data} from './components/data'

function App() {
  return (
    <>
      <Listing items={data}/>
    </>
  );
}

export default App;
