import React, {Component} from 'react';
import {ModalCloseButtonStyle, MyModal} from './ModalStyle';

// const  {isOpen, onClose, chidlren} = props;
//
// export default Modal = isOpen ? (
//     <ModalStyle>
//         <ModalCloseButtonStyle onClick={onClose} />
//         <div>{children}</div>
//     </ModalStyle>
// ) : null;

class Modal extends Component {
    render() {

        let modal = (
            <MyModal>
                <ModalCloseButtonStyle onClick={this.props.onClose}>X</ModalCloseButtonStyle>
                <div>{this.props.children}</div>
            </MyModal>
        );

        if (!this.props.isOpen) {
            modal = null
        }
        return (
            <div>
                {modal}
            </div>
        )
    }
}

export default Modal;
