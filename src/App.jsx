
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './Slices/counterslice'


function App() {

  const majorData = useSelector((ParamState)=> ParamState.counter.value)
  const dispatchValue = useDispatch()
  return (
    <>
    <div className=' flex'>
    <button onClick={()=>dispatchValue(decrement())} className='  text-[170px] text-lime-400 font-extrabold'>-</button>    
    <h6 className=' text-[100px] text-blue-500 font-bold p-12 mt-12'>{majorData}</h6>
    <button onClick={()=>dispatchValue(increment())}  className='  text-[170px] text-lime-400 font-extrabold'>+</button>
    </div>
<div className=" text-center text-[#fff]">properly work on my code</div>
    </>
  )
}

export default App
