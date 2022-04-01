// purely a router js file //
const router = require('express').Router();
const notesRoutes = require('../notesRoutes/notesRoutes.js');


router.use(notesRoutes);

module.exports = router;