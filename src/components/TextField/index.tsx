import React from 'react';
import { TextFieldProps } from './interfaces';
import StandardTextField from './StandardTextField';

const TextField: React.FC<TextFieldProps> = ({
  variant,
  error,
  label,
  onChangeText,
  value,
  isPassword,
}) => {
  if (variant === 'outlined') {
    return <></>;
  }
  return (
    <StandardTextField
      label={label}
      error={error}
      onChangeText={onChangeText}
      value={value}
      isPassword={isPassword}
    />
  );
};

export default TextField;
