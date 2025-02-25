// console.log('hi')
// async function GetBooks() {
//     let data = await fetch('https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech')
//     data = await data.json()
//     console.log(data)
//     // console.log(data.data)
//     // data.then((d)=>data = d.json())
//     console.log('bey')
//     let sum = 'hi' + data + 'bey'
//     console.log(sum)
//     console.log('done')
//     return data
// }

// let res = GetBooks()
// console.log('global done', res)



// let ref = setInterval(() => {
//     console.log(res)
// }, 1000);


// setTimeout(() => {
//     clearInterval(ref)
// }, 5000);


//----------------------------------
 
// promise -> pending _|_
                        // fullfilled   or reject
// if fullfilled it will call the then with the data
// if rejected it will call the catch with the data

fetch('https://randomuser.me/api/')
.then(function(){
    console.log('resolved')
})
.finally(function(){
    console.log('done')
})
.catch(function(){
    console.log('rejected')
})


// if u call finally before the catch or then -> it will goto race conditio