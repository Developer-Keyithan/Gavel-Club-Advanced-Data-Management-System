const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const URLroutes = require('./Route/urlRoutes');
const bodyParser = require('body-parser');

const PORT = 3000;
const MONGO_URI = "mongodb+srv://sathyjaseelankeyithan:keyithanb2002.12@cluster0.78zte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Atlas Cluster Connected"))
    .catch((err) => console.log('MongoDB Atlas Cluster Connection Error:', err));

app.use('/api', URLroutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});