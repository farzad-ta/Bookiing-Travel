import React, { useState } from 'react';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div<{ visible: boolean }>`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 1;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: visibility 0.2s, opacity 0.2s;
`;

interface TooltipProps {
  text: string;
  children:any
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <TooltipWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      <TooltipContent visible={isVisible}>{text}</TooltipContent>
    </TooltipWrapper>
  );
};
export default Tooltip