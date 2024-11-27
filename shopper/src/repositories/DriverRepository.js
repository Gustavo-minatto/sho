class DriverController {
  // Método para listar todos os motoristas
  async index(request, response) {
    try {
      const driverRepository = new DriverRepository();
      const driverService = new DriverService(driverRepository); // Passando o repositório para o serviço

      const drivers = await driverService.driverRepository.findAll(); // Busca os motoristas
      return response.status(200).json(drivers); // Retorna a lista de motoristas
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
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
