const DriverRepository = require("../repositories/DriverRepository");
const DriverService = require("../services/DriverService");
const DriverCreateService = require("../services/DriverCreateService");
const knex = require("knex");

class DriverController {
  async validateTrip(request, response) {
    const { driverId, originAddress, destinationAddress } = request.body;

    try {
      const driverService = new DriverService();
      const result = await driverService.validateTrip(driverId, originAddress, destinationAddress);

      if (typeof result === "string") {
        return response.status(400).json({ error: result });
      }

      return response.status(200).json(result);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }


  async index(request, response) {
    const { motorista } = request.query;

    let drivers;

    drivers = await knex("motoristas")
      .select([
        "nome",
        "descricao",
        "veiculo",
        "veiculo",
        "custo_viagem",
        "imagem_url"
      ])

    return response.json(drivers);

  }


  async create(request, response) {
    const { nome, descricao, veiculo, avaliacao, custo_viagem, imagem_url } = request.body;

    try {
      const driverRepository = new DriverRepository();
      const driverCreateService = new DriverCreateService(driverRepository);

      const driver = await driverCreateService.execute({
        nome,
        descricao,
        veiculo,
        avaliacao,
        custo_viagem,
        imagem_url,
      });

      return response.status(201).json(driver);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

module.exports = new DriverController();
