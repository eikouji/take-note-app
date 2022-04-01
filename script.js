// requires //

const express = require('express');
const fs = require('fs');

const path = ('path');
const database = require('../db/db');

// Express and Port establishment //

const PORT = process.env.PORT || 3001;

// this makes API calls work //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// links to the front end folder //
app.use(express.static('public'));

// API routes //
app.use('/api', notes);
app.use('/htmlRoutes', htmlRoutes);


// Port should be 3001 //
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})