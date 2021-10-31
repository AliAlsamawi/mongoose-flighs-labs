import { Flight } from '../models/flight.js'

function newFlights(req, res){
  res.render('flights/new')
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err) {
    // one way to handle errors
		if (err) return res.redirect('/flights/new')
    console.log(flight)
    // for now, redirect right back to new.ejs
    res.redirect('/flights')
  })
}
function index(req, res) {
  Flight.find({}, function(error, flights) {
    res.render("flights/index", {
      flights,
      error,
      title: "All flights"
    })
  })
}


export {
  newFlights as new,
  create,
  index
}