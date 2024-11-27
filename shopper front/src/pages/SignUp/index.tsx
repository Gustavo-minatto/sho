import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container } from "./styles";

import { api } from "../../services/api";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignIn() {
    navigate(`/`);
  };

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos")
    };

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        console.error(error); 
        if (error.response && error.response.data) {
          alert(error.response.data.message || "Erro ao cadastrar usuário.");
        } else {
          alert("Não foi possível cadastrar o usuário.");
        }
      });

  };

  return (

    <Container>
      <header>
        <h1>Seja bem vindo</h1>
        <p>Salvando seu tempo para chegar ao seu destino!</p>
        <h2>Crie sua Conta</h2>
      </header>
      <main>
        <form>
          <Input
            type="text"
            placeholder="Digite seu nome"
            onChange={e => setName(e.target.value)} />
          <Input
            type="email"
            placeholder="Digite seu email"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            onChange={e => setPassword(e.target.value)}
          />
        </form>
        <Button onClick={handleSignUp}>
          Registrar
        </Button>
        <p>Já tem cadastro?
          <a onClick={handleSignIn}>Entre</a>
        </p>
      </main>

    </Container>
  );
};