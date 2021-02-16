const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public/client')));

app.get('/', (req, res) => {
    res.send('index');
});

app.post('/submit-form', (req, res) => {
    const data = req.body;

    //console.log(data.jsonData);

    res.send(data);
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });