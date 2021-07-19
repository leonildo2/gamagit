import React, { useState } from 'react';
import * as S from './styled';

function App(props) {

  const [ usuario, setUsuario ] = useState('');
  const [ email, setEmail ] = useState('');

  function handlePesquisa() {
  
        localStorage.setItem('usuario', JSON.stringify(usuario));
        localStorage.setItem('email', JSON.stringify(email));
  }

  return (
    
    <S.HomeContainer>
      
      <S.Title>Cadastre-se para receber promoções da White</S.Title>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Input className="emailInput" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
    </S.HomeContainer>
    
  );
}

export default App;
