const path = require('path');
const router = require('express').Router();

const { createNewNote, confirmNewNote, deleteNote } = require('../lib/notes');


// get route //

router.get("/notes", (req, res) => {
   let results = notes;
   if (req.query) {
       results = filterByQuery(req.query, results);
   }
   res.json(results);

});


// get by id //

router.get("/notes/:id", (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// post route //

router.post('/notes', (req, res) => {
   // set id based on what the next index of the array will be // 
   req.body.id = animals.length.toString();

  // if any data in req.body is incorrect, send 400 error back // 
  if (!validateAnimal(req.body)) {
      res.status(400).send("The animal is not properly formatted.");

  } else {
      const animal = createNewAnimal(req.body, animal);
      res.json(animal);
  }
});

 // to delete a note //

/* router.delete('./notes/:id', (req, res) => {
     if (err) throw err;
     var notes = JSON.parse(data);

     let result = deleteNote(req.params.id, notes);
     result = result.filter(({ id }) => id !== req.params.id);

 )};

});
*/

 module.exports = router;
