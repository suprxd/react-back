import config from 'config';
import mongoose from 'mongoose';

mongoose
    .connect(config.get('database.uri'))
    .then(() => {
        console.log('Database Connection Successful');
    })
    .catch((error) => {
        console.log("Database Connection Error", error);
        process.exit(1);
    });