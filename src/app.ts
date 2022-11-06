import cors from 'cors';
import config from 'config';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';

import './utils/mongodbConnect'; // connect to database

import testimonialRoutes from './routes/testimonialRoute';
import errorHandlerMiddleware from './middlewares/errorHandler';
import invalidRouteMiddleware from './middlewares/invalidRoute';

const app = express();

app.use(cors()); // handles cross origin resouce sharing
app.use(bodyParser.json()); // parses the incoming json requests
app.use(bodyParser.urlencoded({ extended: false })); // parses the incoming query requests
app.use(helmet()); // makes apps more secure

// Routing
app.use('/testimonials', testimonialRoutes);

app.use(invalidRouteMiddleware);
app.use(errorHandlerMiddleware);

app.listen(config.get('port')).on('listening', () => {
    console.log('Server started listening on port', config.get('port'));
});