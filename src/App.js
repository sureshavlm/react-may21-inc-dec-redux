import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

const App = () => {
  const count = useSelector(state =>  state, shallowEqual); //it filters the sotre 
  const dispatch = useDispatch(); 

  return (
    <>
    <div>
       <button onClick = { () => dispatch( { type: 'INCREMENT' } )}>Increment</button>
       <button onClick = { () => dispatch( { type: 'DECREMENT' } )}>Decrement</button>
       <h1>Counter: { count }</h1>
     </div>
    </>
  );
}

export default App;
