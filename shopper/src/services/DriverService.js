class DriverService {
  constructor(driverRepository) {
    this.driverRepository = driverRepository; 
    this.client = new Client({});
  }
  async validateTrip(driverId, originAddress, destinationAddress) {
    const driver = await this.driverRepository.findById(driverId);

    if (!driver) {
      throw new Error("Motorista não encontrado");
    }

    try {
      const distance = await this.calculateDistance(originAddress, destinationAddress);

      if (distance < driver.minKm) {
        return `O motorista ${driver.name} exige um mínimo de ${driver.minKm} km. Distância calculada: ${distance} km.`;
      }
      return {
        message: `A viagem com o motorista ${driver.name} pode ser realizada.`,
        distance,
        driver: {
          name: driver.name,
          vehicle: driver.vehicle,
          tripCost: driver.tripCost,
        },
      };
    } catch (error) {
      return `Erro ao calcular a distância: ${error.message}`;
    }
  }

}

module.exports = DriverService;
