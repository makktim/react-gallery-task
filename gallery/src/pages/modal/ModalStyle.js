import styled from "styled-components";

export const MyModal = styled.div`
    max-width: fit-content;
    max-height: fit-content;
    height: auto;
    width: 70%;
    margin: 0 auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: rgba(121, 13, 13, 0.83);
    padding: 10px 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    
    
    @media(min-height: 700px){
        width: 90%;
        padding: 10px 20px 40px;
    }
`;


export const ModalCloseButtonStyle = styled.button`
    margin-bottom: 15px;
    padding: 3px 8px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #deb887db;
    border: none;
    width: 30px;
    height: 30px;
    font-weight: bold;
    align-self: flex-end;
`
;