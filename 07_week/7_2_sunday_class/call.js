
// let task = [{description:"write report", complete}]




// movie rating

let movierating = [
    {title:"Movie A",rating:[4,5,3]},
    {title:"Movie B",rating:[5,5,4]},
    {title:"Movie C",rating:[3,4,2]},

]


let averageRating = movierating.reduce((acc, sum)=>{
//    return sum.rating = (sum.rating||0)+sum.rating
},0)


averageRating = movierating.map((movie)=>{
    let total = movie.rating.reduce((sum,rating)=>{ return sum+rating},0)
    let average = total /movie.rating.length
    // movie.ratings = average
    // return movie
    return {title:movie.title,average:average.toFixed(2)}
})

console.log(averageRating)

let ok;
ok
let say = function(){console.log('hi')}()
say


let person1 = {
    name:'gopal',
    greet:function(){
        console.log(`hello ${this.name}`)
    }
}

let person2 ={
    name:"superman"
}

// call  -> it will call the function

person1.greet.call(person2)  // using call we can pass the context

// bind will return the function

let result = person1.greet.bind(person2)    // person.greet()  ->it will call
let tan = result  // function
console.log(result) // function reference
result()  // function call

setTimeout( person1.greet, 1000);

console.log(this)


//-----------------------------------------


