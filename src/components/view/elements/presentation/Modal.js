import React from 'react';
import '.././scripts/ModalScript';

const Modal = () => (
  <div>
    <div className="ModalOpened">
      <div className="Modal">
        <div className="ModalBackground"></div>
        <div className="ModalContainer">
          <div className="Heading1">
            <span className="Heading3">Nowa Grupa</span>
          </div>
          <div className="ModalMessage">
            <div align="left">
              <div className="Section">
                <div className="Section_header">
                  <div className="Section__title Heading2">Informacje o grupach</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ModalActions">
            <div align="center">
              Actions
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Modal;
