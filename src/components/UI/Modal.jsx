import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(
        <BackDrop onClick={onClose}>
          <Content
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {children}
          </Content>
        </BackDrop>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;

const BackDrop = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(11, 10, 10, 0.402);
`;
const Content = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 20px;
`;
