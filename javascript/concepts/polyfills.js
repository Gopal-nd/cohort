let arr = [1,2,3,4];

if(!Array.prototype.myMap){
   Array.prototype.myMap = function(userFn){
    let result = [];
    for(let i = 0 ;i<this.length;i++){
        let res = userFn(this[i],i ,this)
        result.push(res);
    }
    return result
   }
}   

// let ans = arr.myMap((a,i,ar)=>{
//     console.log(a, i, ar)
//     return a+1
// })
// console.log(ans)

if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function(userFunction){
        let result = []
        for(let i = 0; i<this.length;i++){
            if(userFunction(this[i],i,this)){
               result.push(this[i])
            }
        }
        return result
    };
}

// let fans = arr.myfilter((a)=>{
 
//     return a>3;
// })
// console.log(fans)

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(user){
        for(let i = 0;i<this.length;i++){
            user(this[i])
        }
    }
}

// let fans = arr.myForEach((a)=>{
// console.log(a)
// })


if(!Array.prototype.myAt){
    Array.prototype.myAt = function(index){
        return this[index]
    }
}

// console.log(arr.myAt(1))
if(!Array.prototype.myConcat){
    Array.prototype.myConcat = function(...args){
        let result = [...this]

        for(let arg of args){
            if(Array.isArray(arg)){
                result.push(...arg)
            }else{
                result.push(arg)
            }
        }

        return result
    }
}


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let result = arr1.myConcat(arr2);

// console.log(result);  
// console.log(arr1);    
// console.log(arr2);    