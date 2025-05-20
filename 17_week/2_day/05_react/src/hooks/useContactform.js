import { useState } from "react";

export function useContactform(){
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        role:'ADMIN'
    })
    const [lodaing, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    const submitContact = async(e) => {
        e.preventDefault();
        setLoading(true)
        if(!data.username || !data.email || !data.password || !data.role){
            console.log(data)
            setError("All fields are required")
            return
        }
        const url = 'https://api.freeapi.app/api/v1/users/register';
        const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify(data)
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data)
            setResult(data.message)
        } catch (error) {
            setLoading(false)
            setError(error.message)
          console.error(error);
        }finally{
            setLoading(false)
        }
    }

    return {data,setData, submitContact, lodaing, error,result}
}