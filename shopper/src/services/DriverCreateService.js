class DriverCreateService {
  constructor(driverRepository) {
    this.driverRepository = driverRepository;
  }

  async execute({ nome, descricao, veiculo, avaliacao, custo_viagem, imagem_url }) {
    if (!nome || !veiculo) {
      throw new Error("Os campos nome e veículo são obrigatórios.");
    }

    const newDriver = await this.driverRepository.create({
      nome,
      descricao,
      veiculo,
      avaliacao,
      custo_viagem,
      imagem_url,
    });

    return newDriver;
  }
}

module.exports = DriverCreateService;
