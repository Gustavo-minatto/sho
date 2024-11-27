import { useState, useEffect } from 'react';
import { Container, Header } from './styles';
import ChooseDriver from '../../components/ChooseDriver';
import { api } from '../../services/api';

interface Driver {
  id: number;
  nome: string;
  descricao: string;
  veiculo: string;
  avaliacao: string;
  custo_viagem: number;
}

export default function ChooseTrip() {

  const [drivers, setDrivers] = useState<Driver[]>([]);

  const fetchDrivers = async () => {
    const response = await api.get<Driver[]>('/driver');
    setDrivers(response.data);
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Escolha o Motorista</h1>
        <p>Selecione um motorista para sua viagem</p>
      </Header>
      {drivers.map((driver) => (
        <ChooseDriver
          key={driver.id}
          nome={driver.nome}
          descricao={driver.descricao}
          veiculo={driver.veiculo}
          avaliacao={driver.avaliacao}
          custo_viagem={driver.custo_viagem}
        />
      ))}

    </Container>
  );
}
