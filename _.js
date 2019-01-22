let _ = {

//invert function
invert(object){
  console.log('original Object: ', object)
  let newObject = {}
    for (let key in object){
      let newKey = '', newValue = ''
      newValue = key
      newKey = object[key]
      newObject[newKey] = newValue
    }
    return newObject
  },
//findKey function
findKey(objecy,predicate){
  
 }
}
// Do not write or modify code below this line.
module.exports = _;
