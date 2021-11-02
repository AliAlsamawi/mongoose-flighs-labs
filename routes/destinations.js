import { Router } from 'express'
import * as destinationsCtrl from '../controllers/destinations.js'

const router = Router()

router.get('/new', destinationsCtrl.new)

// router.post('/:id/destinations', flightsCtrl.addToFlight)

export {
  router  
}
