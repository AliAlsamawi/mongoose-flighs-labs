
import { Destination } from '../models/destination.js'

function newDestination(req, res) {
  Destination.find({}, function (error, destinations) {
    res.render('destinations/new', {
      title: 'Add Destination',
      destinations: destinations,
    })
  })
}

export {

  newDestination as new,

}

