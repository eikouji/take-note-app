const fs = require('fs');
const path = require('path');

const router = require('express').Router();
const { createNewNote, confirmNewNote, deleteNote } = require('../../lib/notes');

const { v4: uniqueNoteId } = require('uniqueNoteId');


// get route //

router.get('/notes', (req, res) => {
    fs.readFile("./db/db.json", function(err, data) {
        iff (err) throw err;
        var notes = JSON.parse(data);
            res.json(notes)
        
    })
});

// post route //

router.post('/notes', (req, res) => {
    if (err) throw err;
    var notes = JSON.parse(data);

    // unique id's for each note //
    req.body.id = uniqueNoteId();

    // if any data in the req.body.id is incorrect, post 400 error instead // 
   if (!validNOte(req.body)) {
       res.status(400).send('This note is not properly formatted.');
   } else {
       const note = createNewNote(req.body, notes);
       res.json(note);
   }
});


 // to delete a note //
 router.delete('./notes/:id', (req, res => {
     if (err) throw err;
     var notes = JSON.parse(data);

     let result = deleteNote(req.params.id, notes);
     result = result..filter(({ id }) => id !== req.params.id);

     fs.writeFileSync(path.join(__dirname, '../../db/db.json), JSON.stringify(result));
 };


 module.exports = router;

