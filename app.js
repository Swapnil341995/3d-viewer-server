const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors);
app.get('/', (req, res)=>{
    res.json({message: 'Hello world'});
});

const port = 3001;

app.listen(port,"localhost",()=>{
    console.log("connected to port", port);
});