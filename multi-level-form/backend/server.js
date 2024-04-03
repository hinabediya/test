const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/docs");
    filename: (red, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    };
  },
});

const upload = multer({
  storage: storage,
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "formDetail",
});
//fetch all
app.get("/details", (req, res) => {
  const sql = "SELECT * FROM details";
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
    debugger;
    results.forEach((row) => {
      if (row.document) {
        console.log(row.document);
        row.document = btoa(String.fromCharCode(...new Uint8Array(row.document.data)));
      }
    });
    return res.status(200).json(results); // Return the retrieved data
  });
});

//fetch by id
app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM details WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Record not found" });
    }
    return res.status(200).json(result[0]); // Return the first (and only) row
  });
});

app.post("/upload", upload.single("file"), (req, res) => {
  debugger;
  const { firstName, lastName, email, address, contact, date } = req.body;
  const image = req.file.filename;
  const sql = "INSERT INTO details (firstname, lastname, email, address, contact, dob, document) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [firstName, lastName, email, address, contact, date, image];

  db.query(sql, values, (err, result) => {
    if (err) return res.json({ Message: "error" });
    return res.json({ Status: "success" });
  });
});
app.listen(3000, () => {
  console.log("Listening..");
});
