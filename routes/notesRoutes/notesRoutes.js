
const router = require('express').Router();


  // GET route //
  router.get('/notesRoutes', (req, res) => {
    let results = notesRoutes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
        res.json(database);
 })

    // POST route to the DB file //
    router.post(function (req, res) {
      let jsonFilePath = path.join(__dirname, "/db/db.json");
      let newNote = req.body;
    
      // assign highest ID to test note //
      let highestId = 99;
      // finds highest id //
      for (let i = 0; i < database.length; ++1) {
        let oneNote = database[i];

        if (oneNote.id > highestId) {
             // highestID will be highest iD in db/note array//
             highestId = individualNote.id;
        }
        }

//
// new ID to new notes //
newNote.id = highestId + 1
// send the note to the db //
database.push(newNote);




// POST routes //
router.post(function (req, res) {
    let jsonFilePath = path.join(__dirname, "db/db.json);
    let newNote = req.body;

    // this allows the test note to be the original note//
    let highest
}
}

