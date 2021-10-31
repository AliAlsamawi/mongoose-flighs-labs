import { request } from 'express'
import { Flight } from '../models/flight.js'


function newFlight(req, res){
  res.render('flights/new', {
    title: "Add A New Flight",
  })
}

function create(req, res){
  for (let key in req.body){
    if (req.body[key] === ''){
      delete req.body[key]
    }
  }
  // whenever you add data it goes to req.body
  const flight = new Flight (req.body)
  Flight.create(req.body, function(error, flight){
    console.log(error)
    res.redirect("/flights")

  })
}

function index(req, res){
  Flight.find({}, function(error, flights){
    res.render('flights/index', {
      error: error,
      flights: flights,
      title: "All Flights"
    })
  })
}

function show(req, res){
  Flight.findById(req.params.id, function(error, flight, ticket){
    res.render('flights/show', {
      title: 'Flight Details',
      flight: flight,
      ticket: ticket,
    })
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id, function(error, flight){
    res.redirect('/flights')
  })
}



function createTicket(req, res){
  console.log("creating new ticket!")
  Flight.findById(req.params.id, function (error, flight){
    flight.ticket.push(req.body)
    flight.save(function(err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export{
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  createTicket,
}