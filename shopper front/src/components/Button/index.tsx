import { StyledButton } from './styles';
import { ButtonProps } from './types';


export default function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
