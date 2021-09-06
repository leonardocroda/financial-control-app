import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { TextButtonProps } from './interfaces';
import styles from './styles';

const TextButton: React.FC<TextButtonProps> = ({
  children,
  onPress,
  color,
  disabled,
  classes = { container: {}, text: {} },
}) => {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[styles.container, classes.container]}>
      <Text
        style={[
          styles.text,
          styles[color || 'primary'],
          disabled && styles.disabled,
          classes.text,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
