import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuth } from '../../hooks/auth.jsx';

import { Container } from "./styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const navigate = useNavigate()

  function handleRegistrer() {
    navigate(`/register`);
  }
  function handleSignIn() {
    signIn({ email, password });
  }

  return (

    <Container>
      <header>
        <h1>Seja bem vindo</h1>
        <p>Salvando seu tempo para chegar ao seu destino!</p>
        <h2>Deseja fazer login?</h2>
      </header>
      <main>
        <form>
          <Input type="email" placeholder="Digite seu email" onChange={e => setEmail(e.target.value)}
          />
          <Input type="password" placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)} />
        </form>
        <Button onClick={handleSignIn}>
          Logar
        </Button>
        <p>Não tem cadastro?
          <a onClick={handleRegistrer}>Registre-se</a>
        </p>
      </main>

    </Container>
  );
}

