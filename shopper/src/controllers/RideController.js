const { Client } = require('@googlemaps/google-maps-services-js');
const knex = require("../database/knex");

class RideController {

  client = new Client({});

  async getDistanceAndDuration(origem, destino) {
    try {
      const response = await this.client.distancematrix({
        params: {
          origins: [origem],
          destinations: [destino],
          key: '',
        },
      });

      const status = response.data.rows[0].elements[0].status;
      if (status !== 'OK') {
        throw new Error('Não foi possível calcular a distância entre os endereços');
      }

      const distance = response.data.rows[0].elements[0].distance.value;
      const duration = response.data.rows[0].elements[0].duration.text;

      return {
        distance: distance / 1000,
        duration
      };
    } catch (error) {
      throw new Error(`Erro ao calcular a distância: ${error.message}`);
    }
  }

  async create(request, response) {
    const { motorista_id, origem, destino } = request.body;

    if (!motorista_id) {
      return response.status(400).json({ error: 'O campo motorista_id é obrigatório.' });
    }

    try {
      const { distance, duration } = await this.getDistanceAndDuration(origem, destino);
      const custoPorKm = 2.50;
      const custo = custoPorKm * distance;

      const [ride_id] = await knex("corridas").insert({
        motorista_id,
        origem,
        destino,
        distancia: distance,
        duracao: duration,
        custo
      });

      return response.status(201).json({ ride_id, distance, duration, custo });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: error.message });
    }
  }
}

module.exports = new RideController();
