import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[countNum, setCount] = useState(0);
  function decreaseHandler(){
    setCount(countNum - 1);
  }
  function increaseHandler(){
    setCount(countNum + 1);
  }
  function resetHandler(){
    setCount(0);
  }
  
  return ( 
    <div className="w-[100vw] h-[100vh] flex justify-centre items-center flex-col gap-10 bg-[#344151]">
      <div className='text-[#0398d4] font-medium text-2xl'>INCREMENT AND DECREMENT 
      </div>
      <div className="bg-white flex justify-centre gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} 
        className="border-r-2 text-centre w-20 border-[#bfbfbf] text-5xl ">-</button>
        <div className="w-10 text-center font-mediun text-5xl gap-12">{countNum}</div>
        <button onClick={increaseHandler}
        className="border-l-2 text-centre w-20 border-[#bfbfbf] text-5xl ">+</button>
      </div>
      <button onClick={resetHandler}
      className=" bg-[#0398d4] px-5 py-2 text-white text-lg">Reset</button>
    </div>
  );
}

export default App;
