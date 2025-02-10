const teas = ["green tea", "white tea","Oolong Tea","Herbal Tea"]
console.log(teas)

teas.push("Chamonile Tea")

const index = teas.indexOf("Oolong Tea")
if(index !== -1){
  teas.splice(index,1)
}

const list = teas.filter((tea)=> tea !== "Herbal Tea")

const sorted = teas.sort() 

teas.forEach((tea)=>console.log(tea))


// length of the filtered list
console.log(list.length)

const upperCaseTeas = teas.map((tea)=> tea.toUpperCase())
console.log(upperCaseTeas)

let highest = 0;
teas.forEach((tea)=> {
  let len = tea.length
  highest = Math.max(highest,len)
})

console.log(highest)


console.log(teas)
teas.reverse();
console.log(teas)
