// let promise = new Promise((resolver, reject) =>{

//     setTimeout(() => {
//         console.log(100)
//         resolver('hello')
//     }, 1000)
// }

// ).then((data) => console.log('message', data))
//     .catch((e) => console.log(e))

// OR
// promise.then((data)=>console.log("promise recived",data))

// ------------------------------------------------------------------

// const promiseTwo = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('man')
//         if([]){

//             // throw new Error("no Superman only HeMan")
//             reject('error')
//         }
//         resolve({name:"superman"})
//     },2000)
// })

// promiseTwo.then((data)=>console.log(data)).catch((e)=>console.log(e)).finally((()=>console.log('work completed')))


// new Promise((resolver,reject)=>{
//     // do the work
//     console.log('working')

//     //pass if it get success
//     // resolver('data')

//     //pass to reject on any error
//     reject('error details')
// })
// .then((data)=>console.log('hi'))
// .catch((error)=>console.log('error'))
// .finally(()=>console.log('promise exectued'))



// new Promise((resolver,reject)=>{
//     fetch('https:api.github.com/users/gopal-nd')
//     .then((res)=>res.json())
//     .then((data)=>resolver(data))
//     .catch((err)=>reject({errro:"user request error"}))
// })
// .then((data)=>{
//     console.log(data)
//     console.log(data.followers)
// })
// .catch((e)=>console.log(e))


async function getUserData(params) {
  let res = await  fetch('https:api.github.com/users/gopal-nd')
  console.log(typeof res)
  res =  await res.json()  // json -> object
  console.log(typeof res)
  console.log(res)

}
getUserData()