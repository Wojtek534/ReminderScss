import React from 'react';
import Modal from './presentation/Modal';
import Panel from './presentation/Panel';
import Section from './presentation/Section';

const ElementPage = () => (
  <div id="page">
    <div className="container">
      <div className="col-md-8 offset-md-2">
        <h1>Section</h1>
        <Section/>
        <h1>Panel</h1>
        <Panel/>
        <h1>Modal</h1>
        <Modal/>
      </div>
    </div>
  </div>

)
export default ElementPage;
