import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [isNumAllowed,setNumAllowed] = useState(true);
  const [isCharAllowed,setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef=useRef(null);
  const generatePassword=useCallback(()=>{
    var str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumAllowed) str+="0123456789"
    if(isCharAllowed) str+="!@#$%^&*()<>?:"
    var pass=""
    for(let i=0;i<length;i++){
      pass +=str.charAt(Math.floor(Math.random()*str.length));
    }
    
    setPassword(pass);
  },[length,isNumAllowed,isCharAllowed,setPassword])

  useEffect(()=>{
    generatePassword()
  },[length,isNumAllowed,isCharAllowed,generatePassword])

  const copyToClipboard=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }
  return (
    <>
    <div className='flex justify-center mt-10'>
      <div className='flex flex-col gap-4 h-full max-w-fit bg-slate-400 rounded-lg py-4 px-10'>

        <div className='flex items-center justify-center pt-0'>
          <h1 className='text-white text-3xl text-stone-950 font-bold	'>Password Generator</h1>
        </div>

        <div className='flex items-center justify-center gap-2'>
          <input 
            type="text"
            className='h-11 w-80 rounded-md text-orange-600'
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            className='bg-black px-3 py-1 rounded-lg text-lg text-white hover:bg-slate-800'
            onClick={copyToClipboard}
          >
          Copy
          </button>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <label className='text-xl text-black font-semibold'>Length:</label>
          <input className='w-25 range accent-red-500' type='range' value={length} min={8} max={50} onChange={(e)=>setLength(e.target.value)}/>
          <label className='text-lg text-black'>({length})</label>
          <input className='h-4 w-4' type='checkbox' defaultChecked={isNumAllowed}  onChange={()=>{setNumAllowed((prev)=>!prev);}}/><label className='text-xl text-black font-semibold'>Numbers</label>
          <input className='h-4 w-4' type='checkbox' defaultChecked={isCharAllowed} onChange={()=>{setCharAllowed((prev)=>!prev);}}/><label className='text-xl text-black font-semibold'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
