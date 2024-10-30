const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const axios = require("axios");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/api/tokens', async (req, res) => {
    try {
        const response = await axios.post(process.env.GRAPH_API_URL, {
            query: process.env.QUERY
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
