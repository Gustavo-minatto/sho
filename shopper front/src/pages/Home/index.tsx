import { Container } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../hooks/auth';

export default function Home() {
  const [currentAddress, setCurrentAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [distance, setDistance] = useState(null);
  const navigate = useNavigate();
  const { user} = useAuth();

  async function handleCalculateRoute() {
    if (!currentAddress || !destinationAddress) {
      return alert("Por favor, preencha ambos os campos.");
    }

    try {
      const response = await axios.get("http://localhost:8080/google/directions", {
        params: {
          origin: currentAddress,
          destination: destinationAddress,
        },
      });

      const routeData = response.data;

      console.log("Resposta da API:", routeData);

      if (routeData.status !== "OK") {
        alert(`Erro ao calcular a rota: ${routeData.status}`);
        return;
      }

      setDistance(routeData.routes[0].legs[0].distance.text);
      navigate('/driver', { state: { routeData } });
    } catch (error) {
      console.error("Erro ao calcular a rota:", error);
      alert("Ocorreu um erro ao calcular a rota.");
    }
  }

  return (
    <Container>
      <main>

        <h1> Bem vindo, {user.name}</h1>

        <Input
          label="Endereço atual"
          type="text"
          placeholder="Ex: Maps, São Paulo"
          value={currentAddress}
          onChange={(e) => setCurrentAddress(e.target.value)}
        />
        <Input
          label="Endereço Destino"
          type="text"
          placeholder="Ex: Ibirapuera, São Paulo"
          value={destinationAddress}
          onChange={(e) => setDestinationAddress(e.target.value)}
        />

        <Button onClick={handleCalculateRoute}>Calcular Destino</Button>

        {distance && (
          <div className="distance-info">
            <h3>Distância Calculada: {distance}</h3>
          </div>
        )}

        <div className="history">
          <h3>Veja seu histórico de viagem</h3>
          <Button>Veja agora</Button>
        </div>
      </main>
    </Container>
  );
}
