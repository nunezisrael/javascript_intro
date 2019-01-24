let _ = {
//Clamp
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
//in-inRange
  inRange(number, start, end){
  let newStart, newEnd;
  const checkForNoEnd = endVal =>{
    if(endVal == null){
      newStart = 0; newEnd = start
      return start = newStart; end = newEnd
    }
  }
  const checkForSwap = (val1, val2) =>{
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
//Words
  words(string){
    let wordArr = string.split(' ')
    return wordArr
  },
//Pad
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
//Has
  has(object,key){
  for(let pkey in object){
    console.log(object)
    console.log(object.key)
    return pkey === key ? true : false
    }
  },
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
  findKey(object,predicate){
    for(let key in object){
      let value = object[key]
      if(predicate(value)=== true){
        return key
      }
      else{
        return undefined
      }
    }
  },
//drop function
  drop(arr,number){
    if(number > 0){
      for(let i=0; i < number; i++){
        arr.shift()
      }
      return arr
    }
    else{
      arr.shift()
      return arr
    }
  },
//dropWhile
  dropWhile(arr,predicate){
    arr.forEach((element,index) =>{
      if(predicate(element,index,arr) === true){
          this.drop(arr)
        }
      })
    return arr
  },
//chunk
  chunk(arr,size){
    let newArr = []
    const chunkDivider = () => {
      let iterator = Math.floor(arr.length/size)
      i = 0
      while(iterator > 0){
        let tempArr = []
        tempArr = arr.slice(i, size)
        newArr.push(tempArr)
        i = size
        size = size * 2
        iterator -= 1
      }
    }
    if(size == null){
      let arrayString = arr.toString()
      return arrayString.split(',');
    }
    else if(arr.length % size === 0){
      chunkDivider()
      return newArr
    }
    else{
      let extraChunks = Math.floor(arr.length%size), iterator = Math.floor(arr.length/size)
      let arrayCompleted = arr.length - extraChunks
      chunkDivider()
      lastPiece = this.drop(arr,arrayCompleted)
      newArr.push(lastPiece)
      return newArr
    }
  }
}
//// Do not write or modify code below this line.
module.exports = _;
