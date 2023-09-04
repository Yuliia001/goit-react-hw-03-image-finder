import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  render() {
    const { selectedImage, closeModal, tags } = this.props;
    return (
      <Overlay onClick={closeModal}>
        <ModalWindow>
          <img src={selectedImage} alt={tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}
