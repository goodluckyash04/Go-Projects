const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// Route:1 Get all the notes using :GET "/api/auth/fetchallnotes"  ...Login reqired
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.msg);
    res.status(500).send("Internal Server Error"); //for Internal coding error
  }
});

// Route:2 Add a note using :POST "/api/note/addnote"  ...Login reqired
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "title must have min 3 char").isLength({ min: 3 }), // body(tag,custome msg)
    body("description", "Description must have min 3 char").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // ..............creates new note..................
      const note = new Note({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.msg);
      res.status(500).send("Internal Server Error"); //for Internal coding error
    }
  }
);
// Route:3 Update a note using :PUT "/api/note/updatenote"  ...Login reqired
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    // Find the note to be updated

    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Error! Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error"); //for Internal coding error
  }
});

// Route:4 Delete a note using :Delete "/api/note/deletenote/:id"  ...Login reqired
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // const { title, description, tag } = req.body;
    // const newNote = {};
    // if (title) {
    //   newNote.title = title;
    // }
    // if (description) {
    //   newNote.description = description;
    // }
    // if (tag) {
    //   newNote.tag = tag;
    // }

    // Find the note to be deleted

    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Error! Not Found");
    }
    //check if user has this note with id
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id,);
    res.json({ "success":"Note Deleted",note:note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error"); //for Internal coding error
  }
});



module.exports = router;
