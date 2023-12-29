// Import necessary modules
import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import Location from "assets/location.svg"; // Import the desired icon

// Define the FieldProps interface for component props
interface FieldProps {
  autoFocus?: boolean;
  onClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; // Update function signature
  defaultValue?: string;
  noMargin?: boolean;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  size?: number;
  width?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  id?: string;
  name?: string;
}

// Define the Field component
export const Filed: FC<FieldProps> = ({
  autoFocus,
  onClick,
  onChange,
  defaultValue,
  autoComplete,
  placeholder,
  required,
  type,
  value,
  size,
  width,
  style,
  disabled,
  id,
  name,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer>
      <IconContainer src={Location} />
      <Input
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onClick={onClick}
        onChange={onChange} // Use the updated function signature
        type={type}
        value={value}
        name={name}
        size={size}
        id={id}
        autoFocus={autoFocus}
        disabled={disabled}
        required={required}
        style={style}
        onInput={(e) => e.currentTarget.setCustomValidity("")}
        width={width}
        isFocused={isFocused}
      />
    </InputContainer>
  );
};

// Define the styled components
const InputContainer = styled.div`
  position: relative;
  display: flex;
`;

const IconContainer = styled.img`
  position: absolute;
  bottom: 12px;
  right: 10px;
  width: 20px;
  height: 20px;
`;
interface StyledInputProps {
  isFocused: boolean;
  width: string|undefined;
}

export const Input = styled.input<StyledInputProps>`
  border-radius: 0.5rem;
  border: 1px solid ${(props) => (props.isFocused ? "orange" : "#727483")};
  padding: 0.8rem 2rem;
  width: ${(props) => (props.width ? props.width : "100%")};
  &::placeholder {
    /* Add styles for the placeholder text */
    font-size: 1rem;
  }
`;
