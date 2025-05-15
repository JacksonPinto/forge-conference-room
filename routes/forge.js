const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/token', async (req, res) => {
  try {
    const result = await axios.post('https://developer.api.autodesk.com/authentication/v1/authenticate',
      new URLSearchParams({
        client_id: process.env.FORGE_CLIENT_ID,
        client_secret: process.env.FORGE_CLIENT_SECRET,
        grant_type: 'client_credentials',
        scope: 'viewables:read'
      }).toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    res.json(result.data);
  } catch (err) {
    res.status(500).send('Token retrieval failed');
  }
});

module.exports = router;
