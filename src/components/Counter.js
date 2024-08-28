import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state=> state.showCounter);

  const incrementHandler = (step)=>{
    dispatch({
      type: 'increment',
      step: step,
    });
  }

  const decrementHandler = (step) => {
    dispatch({type: 'decriment'  , step: step});
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&<div className={classes.value}>{counter}</div>}
      <div> 
        <button onClick={()=>decrementHandler(1)} >-</button>
        <button onClick={()=>incrementHandler(5)} >+5</button>
        <button onClick={()=>incrementHandler(1)} >+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
