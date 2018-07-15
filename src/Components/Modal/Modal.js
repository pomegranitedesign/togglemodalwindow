import React, { Component } from 'react';
import styled from 'styled-components';

import assignedClass from './Modal.css';

const ModalWindow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #686de0;
  align-items: center;
  width: 300px;
  min-width: 300px;
  min-height: 300px;
  border: 1px solid #686de0;
  border-radius: 3px;
  height: 300px;
  z-index: 30;
  color: white;
  -webkit-box-shadow: 0px 20px 30px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 20px 30px -10px rgba(0,0,0,0.75);
  box-shadow: 0px 20px 30px -10px rgba(0,0,0,0.75);
`;

export default class Modal extends Component {
  render() {
    const { on } = this.props;

    return (
      <div 
        className={assignedClass.ModalWrapper}
        onClick={this.props.toggle}
      >
        <ModalWindow className={on ? assignedClass.SlideIn : null}>
          <h1>Click Anywhere To Exit</h1>
        </ModalWindow>

        <div className={assignedClass.Background} />
      </div>
    )
  }
}
