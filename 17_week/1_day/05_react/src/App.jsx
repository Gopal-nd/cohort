import { useState, useEffect } from "react"
export function App(){
    const [name, setName] = useState("Chai Chill")
    const [show, setShow] = useState(true);

    useEffect(async() => {
       const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10';
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data.data.data);
  let num = (Math.random()*10).toFixed(0);
  console.log(num)
  setName(data.data.data[num].name?.first);
} catch (error) {
  console.error(error);
} 
    },[])

    return (
        <div>
             <button onClick={() => setShow(prev => !prev)}>
        Toggle Hello Component
      </button>
      {show && <Hello />}
            <h1>Hello This Super React</h1>
            <p>React is a JavaScript library for building user interfaces.</p>
            <br/>
            <p>{name}</p>

            
        </div>
    )   
}



function Hello() {
  useEffect(() => {
    console.log('mounted');
    return () => {
      console.log('unmounted');
    };
  }, []);

  return <h1>Hello Component</h1>;
}