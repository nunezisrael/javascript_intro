let _ = {

  clamp: function(number, lower, upper){

  if(number < lower){
    return lower
  }
  else if(number > upper){
    return upper
  }
  else{
    return number
    }
  },
  inRange(number, start, end){
  let newStart, newEnd;
  const checkForNoEnd = endVal =>{
    if(endVal == null){
      newStart = 0; newEnd = start
      return start = newStart; end = newEnd
    }
  }
  const checkForSwap = (val1, val2) =>{
    //console.log('checkForSwap function '+'this is start '+ val1+' this end '+val2)
    if(val1 > val2){
      newStart = val2; newEnd = val1
      start = newStart; end = newEnd
      return start, end
    }
  }
  checkForNoEnd(end)
  checkForSwap(start,end)

  if(number < start){
    return false
  }
  else if(number >= end){
    return false
  }
  else{
    return true
  }
},
  words(string){
    let wordArr = string.split(' ')
    return wordArr
  },
  pad: function(string,length){
    let padding = 0, extraChar = 0, amount = length - string.length
    let paddedString = ''
    const padAmount = () =>{
      if (amount % 2 === 0){
        padding = amount/2
        extraChar = 0
        return padding, extraChar, amount
      }
      else if( amount < 0){
        padding = 0 , extraChar = 0
        return padding, extraChar, amount
      }
      else {
        padding = (amount-1)/2
        extraChar = 1
        return padding, extraChar, amount
      }
    }

    padAmount()
    paddedString = ' '.repeat(padding)+string+' '.repeat(padding)+' '.repeat(extraChar)
    return paddedString
  },
  has(object,key){
  for(let pkey in object){
    console.log(object)
    console.log(object.key)
    return pkey === key ? true : false
    }
 },
 
}
//// Do not write or modify code below this line.
module.exports = _;
