
const router = require('express').Router();



router.get('/notesRoutes', (req, res) => {
    .get(function (req, res) {
        res.json(database);
    })

    // route to the DB file //
    .post(function (req, res) {
        let jsonFilePath = path.join(__dirname, "/db/db.json");
        let newNote = req.body;
    }
}
// new ID to new notes //
newNote.id = highestId + 1
// send the note to the db //
database.push(newNote);




// POST routes //

