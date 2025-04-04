const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve the form page
app.get('/', (req, res) => {
    res.render('index', { message: null });
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const message = `Submitted: Name - ${name}, Email - ${email}`;
    res.render('index', { message });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});