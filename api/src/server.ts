import express from "express";

const app = express();

app.post("/pages", (request, response) => {
  // Salvando no banco de dados

  return response.status(2001).send();
});

app.get("/search", (request, response) => {
  // Slasvando no banco de dados

  return response.json([]);
});

app.get("/suggest", (request, response) => {
  // Salvando no banco de dados

  return response.status(2001).send();
});

app.listen(3005);
