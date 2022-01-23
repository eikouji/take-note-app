const fs = require('fs');
const path = require('path');

const router = require('express').Router();
const notes = require('../routes/apiRoutes.index.js');

const { createNewNote, confirmNewNote, deleteNote } = require('../../lib/notes');


// add route //
router.get('/notes', (req, res) => {
    fs.readFile("./db/db.json", function(err, data) {
        if (err) throw err;
        var notes = JSON.parse(data);
        res.json(notes)
    })
});


router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", function(err, data) {
      if (err) throw err;
      var notes = JSON.parse(data);
      // incoming content will be //
      // set ID using uniqueNoteId //
      req.body.id = uniqueNoteId();
  
   // if any dada in req.body is not correct, 400 error return // 
     if (!validateNote(req.body)) {
         res.status(400).send('The note is not properly formatted.');
     } else {
         const note = createNewNote(req.body, notes );
     }


   })

});

// delete note // 
  router.delete('/notes/:id', (req, res) => {
      
  })


