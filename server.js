const apiRoutes = require('./routs/apiRoutes');

const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');

const PORT = process.env.PORT || 3003;
// to instantiate the server //
const app = express();

// to make certain files readily available, all assets -- //
app.use(express.static('public'));

// parse incoming string or array data //
app.use(express.urlencoded({ extended:true }));

// parse incoming JSON data //
app.use(express.json());

app.use(express('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`);
});
});
