const sqlite3 = require("sqlite3").verbose();
const fs = require('fs');

fs.open('Movie.db', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

const db = new sqlite3.Database("./Movie.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
  
    console.log("connection succesful");
  });
  
db.run('CREATE TABLE Movie(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, genre TEXT NOT NULL, releasedate TEXT NOT NULL, agelimit TEXT NOT NULL, runningtime TEXT NOT NULL)');
