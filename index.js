const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const postRoutes = require('./routes/posts');

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({limit : '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit : '30mb', extended: true}))

app.use('/posts',postRoutes);




//const CONNECTION_URL = 'mongodb+srv://admin:sugGtUmsOa6FZTF3@cluster0.tyy8q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
        .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
        .catch((err) => console.log(err));