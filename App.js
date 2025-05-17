
import React, { useState } from 'react';
import Chat from './Chat';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.elements.password.value;
    if (password === "458") setAuthenticated(true);
  };

  return authenticated ? (
    <Chat />
  ) : (
    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 100 }}>
      <h2>Digite a senha:</h2>
      <input type="password" name="password" />
      <button type="submit">Entrar</button>
    </form>
  );
}
