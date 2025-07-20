const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

     // Serve static files (HTML, JS)
app.use(express.json());                // Parse JSON in POST requests
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static(path.join(__dirname)));

app.use('/vMuse', express.static(path.join(__dirname,'../vMuse')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});