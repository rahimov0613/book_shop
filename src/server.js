import express from 'express';
import { apiRouter } from './routes/index.js';
import { setUp } from './servies/setup.js';


const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use("/setup", (req, res, next) => {
    setUp();
});
app.use('/', apiRouter);



//error handling middleware
app.use((err, req, res, next) => {
    if (err) {
        res.send(err);
    }
    res.status(500).send('server error'); 
});
 
//start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});