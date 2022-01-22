const router = require('express').Router();
const notes = require('../../apiRoutes.index.js');

const { createNewNote, confirmNewNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    if (!validateNote(req, res)) res.sendStatus(404);
    else {
        createNewNote(req.body, notes);
        res.json(req.body);
    }
});

router.delete("/notes", (req, res) => {
    deleteNote(req.body, notes);
    res.send(`Note with ${req.params.id} has been deleted!.`);
});

module.exports = router;