const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
    const { name, email } = req.body;
    console.log('Received:', name, email);
    res.json({ message: `Hello ${name}, your email ${email} is saved!` });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
