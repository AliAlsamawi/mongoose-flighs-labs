import { Router } from 'express'
import * as destinationsCtrl from '../controllers/destinaions.js'

const router = Router()

router.get('/new', destinationsCtrl.new)

export {
  router  
}