import express from "express";

const PORT = 4001;
const app = express();

const handleHome = (req, res) => {
    return res.send("Welcome my server");
};

app.get("/", handleHome);

const handleListening = () => console.log(`✅ Server listening on port https://localhost:${PORT} `)

app.listen(PORT, handleListening);