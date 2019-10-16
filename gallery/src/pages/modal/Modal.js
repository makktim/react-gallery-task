import React, {Component} from 'react';
import {DialogCloseButtonStyle, DialogStyles} from './ModalStyle';



class Modal extends Component {
    render() {

        let dialog = (
            <DialogStyles>
                <DialogCloseButtonStyle onClick={this.props.onClose}>X</DialogCloseButtonStyle>
                <div>{this.props.children}</div>
            </DialogStyles>
        );

        if (!this.props.isOpen) {
            dialog = null
        }
        return (
            <div>
                {dialog}
            </div>
        )
    }
}

export default Modal;
