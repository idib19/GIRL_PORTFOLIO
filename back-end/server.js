
//Porte du serveur 
const PORT = 5000

import express from 'express'
import { ReviewList, updateReview, deleteReview, getReviewById, addReviews } from './controllers/Reviews.js'

import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Bienvenu cher utilisateur');
})

app.listen(5000, () => console.log(`Serveur running on port ${PORT}`))

app.get('/reviews', ReviewList)
app.post('/reviews', addReviews)
app.put('/reviews/:nom', updateReview)
app.delete('/reviews/:nom', deleteReview)
app.get('/reviews/:nom', getReviewById)
