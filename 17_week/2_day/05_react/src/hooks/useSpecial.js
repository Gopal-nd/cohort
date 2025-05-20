import {useState, useEffect } from "react";

export function useSpecialChai(){
    const [name, setName] = useState("")
    const [lodaing, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(async() => {
        setLoading(true)
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
    setLoading(false)
    setError(error)
  console.error(error);
}finally{
    setLoading(false)
}
    },[])

    return  {name, lodaing, error}
}