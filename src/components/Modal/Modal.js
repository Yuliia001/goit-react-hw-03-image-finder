import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
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
