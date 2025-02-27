function debounce(fn,delay){
    console.log(arguments[0])
    
    let ref;
    return function (...args){

        clearTimeout(ref)      //this clearTimeout make all difference
        ref =  setTimeout(() => {
            console.log(args)
            console.log(...args)
            // fn.apply(this,args)
            fn()

            
           
        }, delay);
    }
}

// let ref = debounce((delay)=>console.log(delay,"is this"),2000)
// ref()

// const  func = (delay)=>console.log(delay,"is this")

let ref = debounce(()=>makeAPICall('gopal-nd'),2000)
ref()
ref()
ref()
ref()
ref()
ref()

//call - > it will call with context
// bind -> it return the function and take context

// applay


// remove past request 
// make a new request
// userrequest() => debouncedUserrequest()



// example make api request


async function makeAPICall(user) {
    try {
        // const res = await fetch(`https://randomuser.me/api/`);
        const res = await fetch(`https://api.github.com/users/${user}`);
        
        const data = await res.json();
        console.log(data, 'called');
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}






















// const numbers = [5, 6, 2, 3, 7];

// // const max = Math.max(...numbers)
// const max = Math.max.apply(null, numbers)

// console.log(max);