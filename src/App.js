import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import setnamesang from './Service/code';
function App() {
  const [name, setname] = useState("");
  const [sang, setsang] = useState("");

  useEffect(()=>{
    const a = 3;
    console.log(a);
    setname("nguyen vu tran tin");

    setnamesang();
  }, [sang]);

  return (
    <>
      <div>
        {name}
      </div>

      <button
      onClick={()=>{
        setname("Hello, World!");
        setsang("Hello, World!");
      }}
      >bamas</button>

      <button
      onClick={()=>{
        setname("Hello, World!");
      }}
      >bamas</button>
    </>
  );
}

export default App;
