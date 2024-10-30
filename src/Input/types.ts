import { ComponentProps } from "react";

export interface CustomInputProps {
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    className?: string;
    error?: string; // Error message to display
    success?: boolean; // Indicates successful validation
    startIcon?: React.ReactNode; // Icon to display before the input
    endIcon?: React.ReactNode; // Icon to display after the input
    required?: boolean; // Marks the input as required
    disabled?: boolean; // Disables the input field
}

export type InputProps = ComponentProps<'input'>

export type ValidationRules = {
  text?: {
      minLength?: number;
      maxLength?: number;
      required?: boolean;
      pattern?: RegExp;
  };
  email?: {
      required?: boolean;
      pattern?: RegExp;
  };
  telephone?: {
      required?: boolean; 
      pattern?: RegExp; 
  };
}

export type InputSpecifications = {
  inputType: string,
  rules: ValidationRules
}