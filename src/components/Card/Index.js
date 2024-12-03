import React from 'react';
import * as C from './styles';

const Index = ({ title, content, iconName: Icon, iconColor }) => {
  return (
    <div>
      <C.CardContainer>
        <C.TitleContainer>
          <C.Title>{title}</C.Title>
          {Icon && <Icon style={{ fontSize: '16px', color: iconColor }} />}
        </C.TitleContainer>
        <C.Content>{content}</C.Content>
      </C.CardContainer>
    </div>
  )
}

export default Index