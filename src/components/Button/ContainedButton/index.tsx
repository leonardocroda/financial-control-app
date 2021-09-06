import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ContainedButtonProps } from './interfaces';
import { containerStyles, textStyles } from './styles';

const ContainedButton: React.FC<ContainedButtonProps> = ({
  children,
  color,
  onPress,
  disabled,
  classes,
}) => {
  return (
    <TouchableOpacity
      style={[
        containerStyles.container,
        containerStyles[color || 'primary'],
        disabled && containerStyles.disabled,
        classes?.container,
      ]}
      onPress={() => !disabled && onPress()}>
      <Text
        style={[
          textStyles.text,
          textStyles[color || 'primary'],
          classes?.text,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default ContainedButton;
