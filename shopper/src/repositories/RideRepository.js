const sqliteConnection = require("../database/sqlite");

class RideRepository {
  async create({ motorista_id, origem, destino, distancia, duracao, custo }) {
    const database = await sqliteConnection();

    const result = await database.run(
      `
      INSERT INTO corridas (motorista_id, origem, destino, distancia, duracao, custo)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [motorista_id, origem, destino, distancia, duracao, custo]
    );

    return { id: result.lastID };
  }
}

module.exports = RideRepository;
  