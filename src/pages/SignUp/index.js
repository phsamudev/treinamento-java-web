import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp() {
    const response = await api.post('users', { email, password });
    const { data } = response;
    console.log(data);
  }

  return (
    <Container>
      <h1>Cadastro</h1>
      <div className="input-container">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />
      </div>
      <div className="action">
        <button onClick={() => handleSignUp()} type="button">
          Finalizar cadastro
        </button>
        <Link to="/">Voltar</Link>
      </div>
    </Container>
  );
}

export default SignUp;
