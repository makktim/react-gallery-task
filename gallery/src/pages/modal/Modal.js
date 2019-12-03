import React, {Component} from 'react';
import {ModalCloseButtonStyle, MyModal} from './ModalStyle';

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
