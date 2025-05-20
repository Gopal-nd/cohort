import { useState, useEffect } from "react"
import { useSpecialChai } from "./hooks/useSpecial";
import { useContactform } from "./hooks/useContactform";
export function App(){
  const [show, setShow] = useState(true);
const {name,lodaing} = useSpecialChai()

    return (
        <div>
             <button onClick={() => setShow(prev => !prev)}>
        Toggle Hello Component
      </button>
      {show && <Hello />}
            <h1>Hello This Super React</h1>
            <p>React is a JavaScript library for building user interfaces.</p>
            <br/>
            {lodaing && <h1>Loading...</h1>}
            <p>{name}</p>

            
        </div>
    )   
}



function Hello() {

  const {data,error,lodaing,result,setData,submitContact} = useContactform()

  return (
    <div>
      <h1>User Resgistration Form</h1>
      <form onSubmit={(e) =>{ e.preventDefault();submitContact(e) }}>
        <label htmlFor="username">User Name:</label>
        <input type="text" id="name" name="username" required  value={data.username} onChange={(e) => setData({...data,username:e.target.value})}/>
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required value={data.email} onChange={(e) => setData({...data,email:e.target.value})} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required  value={data.password} onChange={(e) => setData({...data,password:e.target.value})}/>
        <br />
        <label htmlFor="role">Role:</label>
        <select id="role" name="role" required value={data.role} onChange={(e) => setData({...data,role:e.target.value})}>
          <option value="ADMIN">Admin</option>
          <option value="USER">User</option>
        </select>
        <br />
        <button type="submit" >Register</button>
      </form>
      {error && <p>{error}</p>}
      {result && <p>{result}</p>}
      {lodaing && <p>Loading...</p>}
    </div>
  )
}