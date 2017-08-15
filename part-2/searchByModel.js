const cars = require('./cars.json')
const searchArg = process.argv[2].toLowerCase()

const searchByModel = model => {
  let filteredArray = cars.filter((modelName) => {
    if(modelName.model.toLowerCase() === model) {
      return(modelName)
    }
  })
  return filteredArray.map(filteredCar => {
    return {
      id: filteredCar.id,
      make: filteredCar.make,
      model: filteredCar.model,
      year: filteredCar.year,
      last_owner: filteredCar.last_owner,
      date_purchased: filteredCar.date_purchased
    }
  })
}
console.log(searchByModel(searchArg))