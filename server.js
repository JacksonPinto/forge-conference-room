require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const forgeRoutes = require('./routes/forge');
app.use(express.static('public'));
app.use('/api/forge', forgeRoutes);

app.listen(port, () => {
  console.log(`Forge app running at http://localhost:${port}`);
});
