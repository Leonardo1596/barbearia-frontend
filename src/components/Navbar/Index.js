import React from 'react';
import * as C from './styles';

const Index = () => {
  return (
    <div>
      <C.Navbar>
        <C.Container>
          <C.Brand>GestãoBarber</C.Brand>
          <C.IconContainer>
            <C.IconNotification />
            <C.IconUser />
          </C.IconContainer>
        </C.Container>
      </C.Navbar>
    </div>
  )
}

export default Index