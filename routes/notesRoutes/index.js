// purely a router js file //
const router = require('express').Router();
const notesRoutes = require('../notesRoutes/notesRoutes.js');




router.use(notesRoutes);

router.use(jsonFilePath);

module.exports = router;
