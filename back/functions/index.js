const functions = require('firebase-functions');
const express = require('express');
// const rateLimit = require('express-rate-limit');
const indexRouter = require('./routes/index');
const cors = require('cors')({origin: true});
const app = express();


// const apiRequestLimiter = rateLimit({
//     windowMs: 1 * 60 * 1000, // 1 minute
//     max: 20, // limit each IP to 20 requests per windowMs
//     message: "Your limit exceeded"
// })

// app.use(apiRequestLimiter);
// app.use(express.json());
app.use(cors);
app.use('/api/', indexRouter);
// app.listen(4000, () => {
//     console.log('listening on port 4000');
// })

// app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });

exports.app = functions.https.onRequest(app);

// https://us-central1-trackmaniayo-api.cloudfunctions.net/app/