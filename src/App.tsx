

import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state)=>state.counter)
  // const dispatch = useDispatch();
  // const {count} = useSelector((state)=>state.counter)
  
  const handleIncrement=(amount:number)=>{
    dispatch(increment(amount))
  }
  const handleDecrement=(amount:number)=>{
    dispatch(decrement(amount))
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <h1 className="text-3xl font-mono  mb-5">Counter With redux</h1>
   <div className="flex gap-5">
   <button onClick={()=>{handleIncrement(1)}} className="btn btn-success mb-3">Increment</button>
   <button onClick={()=>{handleIncrement(5)}} className="btn btn-success mb-3">Increment by 5</button>
   </div>
      <div>{count}</div>
     <div className="flex gap-5">
     <button onClick={()=>{handleDecrement(1)}} className="btn mt-3 btn-error">Decrement</button>
     <button onClick={()=>{ dispatch(decrement(5))}} className="btn mt-3 btn-error">Decrement by 5</button>
     </div>
    </div>
  );
}

export default App;
