const cars = require('./cars.json')
const yearRange = process.argv[2].split('-')

const searchByYear = yearRange => {
  let startYear = Number(yearRange[0])
  let endYear = Number(yearRange[1])

  let filteredArray = cars.filter(car => {
    if(startYear <= car.year && endYear >= car.year){
      return car
    }
  })
  return filteredArray.map(filteredCar => {
    return {
      id: filteredCar.id,
      make: filteredCar.make,
      model: filteredCar.model,
      year: filteredCar.year
    }
  })
}

console.log(searchByYear(yearRange));