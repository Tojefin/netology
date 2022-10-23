import Fetch from './components/Fetch';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Fetch url={'http://localhost:7070/data'} />
      <Fetch url={'http://localhost:7070/error'} />
      <Fetch url={'http://localhost:7070/loading'} />
    </div>
  );
}

