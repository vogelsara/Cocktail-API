const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('./public'));
const cocktails = [];

app.listen(3000, () => console.log('server is listening'));
