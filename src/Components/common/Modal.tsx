import { useEffect, useState } from "react";
import styled from "styled-components";

interface ButtonType {
  color?: string;
  Text: string;
  padding: string;
  width: string;
}
const Modal = ({ children, isOpen, onClose }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };
  return (
    <>
      {isModalOpen && (
        <PrimaryModal isModalOpen>
          <Content>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            {children}
          </Content>
        </PrimaryModal>
      )}
    </>
  );
};
export default Modal;
export const PrimaryModal = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isModalOpen ? 1 : 0)};
  transition: 1s  all;
`;
export const Content = styled.div`
  background: #fffafa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
`;
export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
`;
