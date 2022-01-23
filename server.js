const express = require('express');

const PORT = process.env.PORT || 3003;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');



// parse incoming string or array data // Middleware //
app.use(express.urlencoded({ extended:true }));

// parse incoming JSON data //
app.use(express.json());

// to make certain files readily available, all assets -- //
app.use(express.static('public'));

// use API routes //   
app.use(express('/api', apiRoutes));
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`);
});
