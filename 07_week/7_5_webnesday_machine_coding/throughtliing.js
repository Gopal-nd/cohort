const throghtal = (fn,delay)=>{
    let myid= null
    return (...args)=>{
        if(myid===null){

            // fn.applay(this,args)
            fn(...args)
            myid =  setTimeout(() => {
                myid = null
            }, delay);
        }
    }
}


throghtal()
