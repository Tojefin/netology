import './App.css';
import Stars from './components/Stars.js'

function App() {
  return (
    <>
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={5} />
      
      <Stars count={0} />
      <Stars count={6} />
      <Stars count={'text'} />
      <Stars />
    </>
  );
}

export default App;
