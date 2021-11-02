
import { Destination } from '../models/destination.js'

function newDestination(req, res) {
  Destination.find({}, function (error, destinations) {
    res.render('destinations/new', {
      title: 'Add Destination',
      destinations: destinations,
    })
  })
}

function addToFlight(req, res){
  Flight.findById(req.params.id, function(err, flight){
    flight.destination.push(req.body.destinationId)
    flight.save(function (err){
      res.redirect(`/flights/new${flight._id}`)
    })
  })
}

export {

  newDestination as new,
  addToFlight

}

