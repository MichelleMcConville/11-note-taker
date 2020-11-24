// LOAD DATA: linking route(s) to a series of "data" sources.
const fs = require("fs");
const router = require("express").Router();
const noteData = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");     // UUID to create a unique ID

// ROUTING (CRUD operations)

// API GET Request
router.get("/api/notes", (req, res) => res.json(noteData));

