const myDate = new Date(1977, 8, 28)
const weekday = date => {
  if(date instanceof Date) {
    const index = date.getDay()
    if(isNaN(index)) {
      throw new Error('This is not a valid date Object')
    }
    const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return dayArray[index]
  }
}
console.log(weekday(myDate));


const capitolizeFourth = string => {
  if(typeof string !== 'string') {
    throw new Error('Please enter a valid string')
  } else {
    let splitArray = string.toLowerCase().split("")
      for(var i = 3; i < splitArray.length; i += 4) {
        splitArray[i] = splitArray [i].toUpperCase()
      }
      return splitArray.join("")
  }
}

const getValues = object => {
  if(typeof object !== 'object') {
    throw new Error ('Please enter a valid object')
  } else {
    return Object.values(object)
  }
}

let filterAround = (array, lower, upper) => {
  if(!Array.isArray(array)) {
    throw new Error('Please enter a valid Array')
  }
  let filteredArray = array.filter(element => {
    return (element < lower || element > upper)
  })
  return filteredArray
}


module.exports = {weekday, capitolizeFourth, getValues, filterAround} 