
const { createNewNote, confirmNewNote, deleteNote } = require('../lib/notes');

const fs = require('fs');
const { jest, it, expect } = require('@jest/globals');
const { describe } = require('yargs');

jest.mock("fs");

describe("createNewNote", () => {
    it("should create a new note", () => {
        const currentNotes = [
            {
                title: "Note - 1",
                text: "Pancakes at 6, I'm out of tricks. No more sticks. Take some pics.",
                id: "111",
            }, 
            {
                title: "Note - 2",
                text: "Pancakes at 8, don't be late for a date that is at 8.",
                id: "112",
            }, 
            {
                title: "Note - 3",
                text: "Pancakes at 9, on my dime, minus the lime, the forks have 4 tines."
            },
        ];

        const newNote = createNewNote (
            {
                title: "New Note title",
                text: "new note text",
            },
            currentNotes
        );
   
     expect(newNote.title).toBe("New Note Title");
     expect(newNote.text).toBe("new note text");
     expect(currentNotes.length).toEqual(3);

    });
});

