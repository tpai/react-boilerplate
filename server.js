const fallback = require('express-history-api-fallback');
const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 8080;

const root = path.resolve(__dirname, './www');
app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'www', 'index.html'));
});

httpServer.listen(port, () => {
    console.log(`Listening http://localhost:${port}`);
});
