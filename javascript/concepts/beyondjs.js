
const myArr = []
%DebugPrint(myArr)

// continiouse , Holey 
//
// SMI (small integer)
// Packed element
// Double (float,string, function)


const arr2 = [1,2,3,4,5,6,7,8,9]    // best performens
// packed smi elements

arr2.push(6.0)
// now it will become Packed_Double_elemets

arr2.push('2')
// now it will become the Packed_element

arr2[11] = 22 
//now it will become the  Holey_element  because the 10 index will be empty
//  once arry moves the type upper it will not become same as before


// if you console log the elemet arr2[9]
console.log(arr2[9])
// bound check
// hasOwnProperty(arrTwo,9)
//hasOwnProperty(arr.prototype,10)
//hasOwnProperty(Object.prototype,10)


// holes are very expensive in js 
//hasOwnProperty is modt costly operation 



const arr3 = [1,2,,,4]
// holey 



