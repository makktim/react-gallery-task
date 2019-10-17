import styled from "styled-components";

export const DialogStyles = styled.div`
    max-width: fit-content;
    width: 90%;
    height: auto;
    margin: 0 auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background-color: rgba(121, 13, 13, 0.83);
    padding: 10px 20px 40px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;


export const DialogCloseButtonStyle = styled.button`
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