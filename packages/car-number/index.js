import CarNumber from './car-number'

CarNumber.install = function(app) {
  app.component(CarNumber.name, CarNumber)
}

export default CarNumber;