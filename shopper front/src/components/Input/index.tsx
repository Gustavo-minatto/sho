import { InputHTMLAttributes } from 'react';
import { Container, InputField } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, id, ...rest }: InputProps) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <InputField {...rest} id={id} />
    </Container>
  );
}
