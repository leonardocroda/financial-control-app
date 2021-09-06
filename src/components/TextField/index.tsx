import React from 'react';
import { TextFieldProps } from './interfaces';
import StandardTextField from './StandardTextField';

const TextField: React.FC<TextFieldProps> = ({
  variant,
  error,
  label,
  onChangeText,
  value,
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
    />
  );
};

export default TextField;
