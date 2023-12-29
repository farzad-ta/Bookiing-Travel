import styled from "styled-components";

interface ButtonType {
  color?: string;
  Text: string;
  padding?: string;
  width?: string;
  onClick: (e: any) => any;
}
export const Button = ({ color, Text, padding, width, onClick }) => {
  return (
    <PrimaryButton
      onClick={onClick}
      color={color}
      padding={padding}
      width={width}
    >
      <div>{Text}</div>
    </PrimaryButton>
  );
};

export const PrimaryButton = styled.button<{ padding; width }>`
  background-color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primaryHover};
  width: ${({ width }) => (width ? width : "100%")};

  color: #fff;
  border-radius: 2rem;
  cursor: pointer;
  padding: ${({ padding }) => (padding ? padding : "0.8rem 1.5rem")};
  &:hover {
    background-color: #173486;
  }
  div {
    font-weight: 700;
  }
`;
