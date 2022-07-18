import React from 'react'
import styled from 'styled-components';

export const Modal = ({children, estado, cambiarEstado, titleModal}) => {
    /* const {modalTitle} = props */
  return (
    <>
        {estado && 
        <Overlay>
            <ContenedorModal>
                <EncabezadoModal>
                    <h3>{titleModal}</h3>
                </EncabezadoModal>

                <ButtonEsc onClick={() => cambiarEstado(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </ButtonEsc>

                {children}

            </ContenedorModal>

        </Overlay>
        }
    </>
  )
}

export default Modal;

const Overlay = styled.div`
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0,0,0, .5) ;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;  

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: absolute;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px,7px,29px, 0px;
    padding: 20px;
`; 

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    H3{
        margin: 0;
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }

`;

const ButtonEsc = styled.button `
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3 ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover{
        background: #F2F2F2;
    }

    svg{
        width: 100%;
        height: 100%;
    }
`;