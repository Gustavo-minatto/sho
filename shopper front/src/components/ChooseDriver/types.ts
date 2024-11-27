import { ReactNode } from "react";

export interface DriverCardProps {
  nome: string;
  descricao: string;
  veiculo: string;
  avaliacao: string;
  custo_viagem: number;
  children?: ReactNode;
};