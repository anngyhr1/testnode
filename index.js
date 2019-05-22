const express = require('express');
const {initLog} = require('./startup/logging');
const app = express();

require('./startup/routes')(app);
initLog();
app.use(express.static('public'));

app.listen(3000, () => console.log('server started'));