import React from 'react';
import ContainedButton from './ContainedButton';
import { ButtonProps } from './interfaces';
import TextButton from './TextButton';

const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  color = 'primary',
  children,
  onPress,
  disabled = false,
  classes,
}) => {
  if (variant === 'contained') {
    return (
      <ContainedButton
        classes={classes}
        color={color}
        onPress={onPress}
        disabled={disabled}>
        {children}
      </ContainedButton>
    );
  }
  if (variant === 'outlined') {
    return <></>;
  }
  return (
    <TextButton
      classes={classes}
      color={color}
      onPress={onPress}
      disabled={disabled}>
      {children}
    </TextButton>
  );
};

export default Button;
