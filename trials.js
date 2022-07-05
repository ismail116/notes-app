// const car = {
//     model:'BMW',
//     color:'Black'
// }
// console.log(car)
// console.log(car.model)

// //oject --> json JSON.stringfy

// const carJson = JSON.stringify(car)
// console.log(carJson)
// console.log(carJson.model) // undefined --> can not access json

// // json --> object JSON.parse()
// const carObject = JSON.parse(carJson)
// console.log(carObject)
////////////////////////////////////////////////////////////////////////////

const fs = require('fs')

// error 
// fs.writeFileSync('cars.json',carObject)

// fs.writeFileSync('cars.json',carJson)
// console.log(fs.readFileSync('cars.json').toString())

///////////////////////////////////////////////////////////////////////

/**
 * Create object person name age
 * change object --> json
 * write json data file 
 * read
 * json --> object
 * update name age 
 * object --> json 
 * write file 
 */

const person = {
    name:'ali',
    age:50
}

const personJson = JSON.stringify(person)
console.log(personJson)

fs.writeFileSync('person.json',personJson)

const data = fs.readFileSync('person.json').toString()
console.log(data)

const newObject = JSON.parse(data)
console.log(newObject)

newObject.name = 'yassin'
newObject.age = 40

const newJson = JSON.stringify(newObject)
fs.writeFileSync('person.json',newJson)
