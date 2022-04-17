import { useState ,useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //react give the facility to directly get HTML
 //there is no document no window
//  setInterval(()=>{
//    setCount((p)=>p+1)
//  },300);
  const divRef=useRef(null);
  return (
    <div className="App">
      <h1>USEREF SCROLLER</h1>
      {/* <h3>Counter:{count}</h3> */}
      <div ref={divRef} className='red'>R</div>
      <div className='green'>E</div>
      <div className='blue'>A</div>
      <div className='yellow'>C</div>
      <div className='skyblue'>T</div>
      <div className='pink'>R</div>
      <div className='orange'>E</div>
      <div className='black'>A</div>
      <div className='teal'>C</div>
      <div className='red'>T</div>
      <div className='reddish'>R</div>
      <div className='red'>E</div>
      <div className='green'>A</div>
      <div className='blue'>C</div>
      <div className='yellow'>T</div>
      <div className='skyblue'>R</div>
      <div className='pink'>E</div>
      <div className='orange'>A</div>
      <div className='black'>C</div>
      <div className='teal'>T</div>
      <div className='red'>R</div>
      <div className='reddish'>E</div>
     <button onClick={()=>{
       divRef.current.scrollIntoView({behavior:"smooth"})
     }}>SHOW</button>
    </div>
  )
}

export default App


//react allow to store any element using (useRef) and by that we can use it in future
//one ref is only for 1 element ref={divRef}