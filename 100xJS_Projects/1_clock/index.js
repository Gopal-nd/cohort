let now = new Date(1999,11,17,10,25,20,222)
 let now2 = new Date('1999-12-17T20:24:00.333Z')

// date can be initalized in this many formate

// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
// new Date(628021800000)
// new Date("1995-12-17T03:24:00")
// Date()
// Date.now() // in milliseconds


//difference between
new Date()   //return the objects
Date()      // return string


const start = Date.now();
(()=>{
    let val=0
    for(let i=0;i<100_000_000;i++){
        val+=i
    }
    console.log(val)
})()
console.log(`Time elapsed: ${Date.now() - start} ms`);

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    week:'long'
    
  };


let d = new Date()

console.log(d.toDateString("de-DE",options))


function updateTime(){
    let now =new Date()

    let hours = (now.getHours() %12 ).toString().padStart(2,'0')
    let min = now.getMinutes().toString().padStart(2,'0')
    let seconds = now.getSeconds().toString().padStart(2,'0')
    let ampm = now.getHours() >=12 ?'PM':"AM"

    let date = now.toLocaleDateString(undefined,options)
    document.getElementById('time').textContent=`${hours}:${min}:${seconds} ${ampm}`
    document.getElementById('date').textContent = date
}

setInterval(updateTime,1000)