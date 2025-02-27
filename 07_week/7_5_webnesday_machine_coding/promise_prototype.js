class MyPromise{
    constructor(executerFn){
        this._state = 'pending'
        this._sucess =[]
        this._errors = []
        this._finally = []
        this._value = undefined
        this._reson = undefined
        executerFn(
            this.resolverFunction.bind(this),
            this.rejecterFunction.bind(this)
        )
    }

    then(cb){
        if(this._state === 'fullfiled'){
            cb(this._value)
            return this
        }else{

            this._sucess.push(cb)
            return this
        }
    }
    catch(cb){
        if(this._state === 'rejected'){
            cb(this._reson)
            return this
        }else{

            this._errors.push(cb)
            return this
        }
    }

    finally(cb){
        if(this._state !=='pending'){
            cb()
            return this
        }
        this._finally.push(cb)
        return this
    }

    resolverFunction(val){
        this._state = 'fullfiled'
        this._value = val
        this._sucess.forEach((cb)=>cb(val))
        this._finally.forEach(cb=>cb())
    }

    rejecterFunction(err){
        this._state = 'rejected'
        this._reson = val
        this._errors.forEach((cb)=>cb(err))
        this._finally.forEach(cb=>cb())
    }
}






function wait(s){
    return new MyPromise((resolve,reject)=>{
        // setTimeout(() => {
            resolve('super')
        // }, s*1000);
    })
}



wait(2)
.then((val)=>console.log("resolved",val))
.then((val)=>console.log('i got info',val))
.catch(()=>console.log('error in code'))
.finally(()=>console.log('execution completed'))
console.log("register callbacks")