const express = require("express");
const axios = require("axios");

const googleRoutes = express.Router();

googleRoutes.get("/directions", async (req, res) => {
  const { origin, destination } = req.query;
  const apiKey = "GOOGLE_API_KEY";

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json`,
      {
        params: {
          origin: origin,
          destination: destination,
          key: apiKey,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Erro ao buscar a rota:", error);
    res.status(500).json({ error: "Não foi possível calcular a rota." });
  }
});

module.exports = googleRoutes;
