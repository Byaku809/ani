const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Статик файлуудыг public хавтсаас үйлчилгээ үзүүлэх
app.use(express.static(path.join(__dirname, "public")));

// JSON өгөгдлийг илгээх маршрут
app.get("/anime.json", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "anime.json"));
});

// Головны хуудас руу чиглүүлэх
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

// Серверийг ажиллуулах
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
