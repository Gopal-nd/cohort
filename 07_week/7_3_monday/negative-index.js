let num = [1,2,3,4,5,6,7,8,9,10]


console.log(num[-1])

// proxys concepts

const user = {
    name:'gopal',
    age:20,
    password:'1234567',  // it should be hidden

}


// arr.length is a proxyed propertie

const proxyUser = new Proxy(user,{
    get(target, prop){
        console.log(prop)
        if(prop ==='password'){
            throw new Error('Acces denied')
        }
        return target[prop]
    },
    set(target,prop,value){
        target[prop] = value
        return true
    }
});

proxyUser.age = 15

console.log(user.age)

// console.log(proxyUser.password)


function negativeIndex(arr){
    return new Proxy(arr, {
        get(target,prop){        //target -> arr, prop -> index
            let index = Number(prop)
            if(prop<0){
                return target[target.length+index]
            }
            return target[index]
        },
        // seting the value
        set(target,prop,value){
            let index = Number(prop)
            if(prop<0){
                index = target[target.length+index]
                target[index] = value
                return true
            }
             target[index]= value
             return true
        }
    })
    
}



let newArr = negativeIndex(num)

console.log(newArr[-1])
newArr[-2]=2222
console.log(newArr)
console.log(num)


