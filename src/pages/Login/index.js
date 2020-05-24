import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function LoginForm() {
  const handleLogin = () => {};

  return (
    <Container>
      <h1>Login</h1>
      <div className="input-container">
        <input type="text" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />
      </div>
      <div className="action">
        <button onClick={() => handleLogin()} type="button">
          Entrar
        </button>
        <Link to="/signup">Cadastrar-se</Link>
      </div>
    </Container>
  );
}

export default LoginForm;
