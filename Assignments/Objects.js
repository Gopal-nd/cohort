const Teas = {
  name:"Lemon tea",
  type:"Green",
  caffine:'low',
  slogan:()=>{
    console.log('We love the chai')
  }
}

console.log(Teas.name)
console.log(Teas["type"])

Teas.origin = "Assam"
console.log(Teas.origin)

Teas.caffine = "medium"
console.log(Teas.caffine)


delete Teas.caffine
console.log(Teas)

console.log("type" in Teas)  // in used to check in keys
console.log('Green' in Teas)

console.log(Teas.hasOwnProperty('slogan'))
console.log(Object.hasOwn(Teas,'name'))
// to find values();

console.log(Object.values(Teas).includes('Green'))

delete Teas.origin

console.log(Teas)

for(let key in Teas){
  console.log(`${key} : ${Teas[key]}`)
}

const favourateTeas = {
  greenTea :{name:"greenTea",color:'green'

  },
  blackTea :{name:"black Tea",color:"black"},
  whiteTea :{name:"white Tea",color:"white"},
  lemonTea :{name:"Lemon Tea",color:"gree"},
}
const copyofavTeas = JSON.stringify(favourateTeas);    // deep copy
const finalCopy = JSON.parse(copyofavTeas);
const cpTeas = favourateTeas // passing reference
const ftcopy = {...favourateTeas} // shallow copy
cpTeas.greenTea = 'hi'
cpTeas.blackTea.color = "Unknown color"
console.log(ftcopy)
console.log(cpTeas)
console.log(finalCopy)
