import { Container, Info} from './styles';
import { DriverCardProps } from './types';

export default function ChooseDriver({
  nome,
  descricao,
  veiculo,
  avaliacao,
  custo_viagem,
  children
}: DriverCardProps) {
  return (
    <Container>
      <Info>
        <h2>{nome}</h2>
        <p>Descrição: {descricao}</p>
        <p>Veículo: {veiculo}</p>
        <p>Avaliação: {avaliacao}</p>
        <p>Valor da viagem: R$ {custo_viagem.toFixed(2)}</p>
        {children && <div>{children}</div>}
      </Info>
    </Container>
  );
}
