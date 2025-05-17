import React from 'react';
import * as C from './styles';
import api from '../../services/api';

const Index = ({ type, title, action, data, toggleConfirmationPopup }) => {
    const handleActionButton = async () => {
        if (type === 'agendamentos') {
            if (action === 'Excluir') {
                const response = await api.delete(`/delete_appointment/${data}`);
                window.location.reload();
            }
            return;
        }
        
        if (type === 'serviços') {
            if (action === 'Excluir') {
                const response = await api.delete(`/delete_service/${data}`);
                window.location.reload();
            }
        }

        if (type === 'produtos') {
            if (action === 'Excluir') {
                const response = await api.delete(`/delete_product/${data}`);
                window.location.reload();
            }
        }
    }

    return (
        <div>
            <C.PopupOverlay onClick={toggleConfirmationPopup}>
                <C.Popup onClick={(e) => e.stopPropagation()}>
                    <C.CloseButton onClick={toggleConfirmationPopup} />
                    <C.Title>{title}</C.Title>
                    <C.ButtonsContainer>
                        <C.Button style={{ backgroundColor: '#E74C3C' }} onClick={toggleConfirmationPopup}>Cancelar</C.Button>
                        <C.Button style={{ backgroundColor: '#007bff' }} onClick={handleActionButton} >{action}</C.Button>
                    </C.ButtonsContainer>
                </C.Popup>
            </C.PopupOverlay>
        </div>
    )
}

export default Index;