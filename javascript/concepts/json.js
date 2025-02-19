//  fetch('https://randomuser.me/api/')
// .then((res) => res.json())
// .then((data) => data.results[0])
// .then((data)=>console.log(data))
// .catch((e) => console.log(e))

let details;

async function getData() {
    const result = await fetch('https://randomuser.me/api/');
    console.log(result)
    const jsonData =await result.json()
    console.log(jsonData)
    details  =jsonData;
}
getData()


console.log("out of scope ",details)