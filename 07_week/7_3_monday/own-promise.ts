// creating a custom promise

// let pro = new Promise((resolve,reject)=>{
//     reject('error')
//     resolve(1)
// })

// pro.then(data =>console.log(data))
// pro.catch(data=>console.log(data))


// promise callback type 
type TPromiseResolve<T> = (value:T)=>void;
type TPromiseReject<T> = (value:T)=>void;


// user functions type 
type TPromiseThenCallBack<T> =(value:T|undefined)=>void
type TPromiseCatchCallBack<T> =(value:T|undefined)=>void
type TPromiseFinalyCallBack = () => void

// ececutable function
type TPromiseEcecuter<T,K> =(resolve:TPromiseResolve<T>,reject:TPromiseReject<K>)=>void

enum PromiseState {
    PENDING ='pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected'
}

class MyPromise<T,K> {
    private _state :PromiseState = PromiseState.PENDING    // tack status
    private _value :T | undefined    // track value
    private _reson :K | undefined    // track reson

    // array to store all the user functions
    private _successCallBackHandlers :TPromiseThenCallBack<T>[] = []
    private _failureCallBackHandlers :TPromiseCatchCallBack<K>[] = []
    private _finallyCallBackHandlers :TPromiseFinalyCallBack | undefined = undefined

    constructor(executer:TPromiseEcecuter<T,K>){
        executer(this._promiseResolver.bind(this),this._promiseRejecter.bind(this))
    }


   public then(handlerFn:TPromiseThenCallBack<T>){
        if(this._state === PromiseState.FULFILLED){
            handlerFn(this._value)   
        }else{

            this._successCallBackHandlers.push(handlerFn)
        }
        return this
    }

    public catch(handlerFn:TPromiseCatchCallBack<K>){
        if(this._state === PromiseState.REJECTED){
            handlerFn(this._reson)
        }else{
            this._failureCallBackHandlers.push(handlerFn)

        }
        return this
    }

    public finally(handlerFn:TPromiseFinalyCallBack){
        if(this._state !== PromiseState.PENDING) return handlerFn()
        this._finallyCallBackHandlers =handlerFn
    } 

    private _promiseResolver(value:T){
        if(this._state === PromiseState.FULFILLED) return

        this._state = PromiseState.FULFILLED
        this._value = value
        this._successCallBackHandlers.forEach((cb)=> cb(value))
        if(this._finallyCallBackHandlers) this._finallyCallBackHandlers()
    }

    private _promiseRejecter(value:K){
        if(this._state === PromiseState.REJECTED) return

        this._state = PromiseState.REJECTED
        this._reson = value
        this._failureCallBackHandlers.forEach((cb)=> cb(value))
        if(this._finallyCallBackHandlers) this._finallyCallBackHandlers()

    }
}


function cusPromise(){
    return new MyPromise<number,string>((resolve,reject)=>{
        // resolve(1)
        reject('no rejected')
    })
}


const p1 = cusPromise()

p1.then((res)=>console.log(res)).catch((reson)=>console.log(reson)).finally(()=>console.log('done'))
