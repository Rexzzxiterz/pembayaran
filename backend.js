// backend.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/payment', (req, res) => {
    const { amount, paymentMethod } = req.body;
    // Logika untuk memproses pembayaran
    res.send(`Payment of ${amount} received using ${paymentMethod}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
