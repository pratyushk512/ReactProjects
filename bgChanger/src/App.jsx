import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState('black');
  
  return (
    <>
      <div className='h-screen w-full' style={{backgroundColor:color}}>
        <div className='fixed flex justify-center flex-wrap bottom-12 inset-x-2'>
          <div  className='flex flex-wrap gap-3 px-3 py-2 rounded-3xl' style={{backgroundColor:'white'}}>
              <button className='px-4 py-1 rounded-full text-white' onClick={()=>setColor('red')} style={{backgroundColor:'red'}}>Red</button>
              <button className='px-4 py-1 rounded-full text-white' onClick={()=>setColor('green')} style={{backgroundColor:'green'}}>Green</button>
              <button className='px-4 py-1 rounded-full text-white' onClick={()=>setColor('olive')} style={{backgroundColor:'olive'}}>Olive</button>
              <button className='px-4 py-1 rounded-full text-white' onClick={()=>setColor('violet')} style={{backgroundColor:'violet'}}>Violet</button>
              <button className='px-4 py-1 rounded-full text-white' onClick={()=>setColor('black')} style={{backgroundColor:'black'}}>Black</button>
              <button className='px-4 py-1 rounded-full text-white' onClick={()=>setColor('yellow')} style={{backgroundColor:'yellow'}}>Yellow</button>
              <button className='px-4 py-1 rounded-full text-white' onClick={()=>setColor('cyan')} style={{backgroundColor:'cyan'}}>Cyan</button>
              <button className='px-4 py-1 rounded-full text-white' onClick={()=>setColor('magenta')} style={{backgroundColor:'magenta'}}>Magenta</button>
              <button className='px-4 py-1 rounded-full text-white' onClick={()=>setColor('orange')} style={{backgroundColor:'orange'}}>Orange</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
