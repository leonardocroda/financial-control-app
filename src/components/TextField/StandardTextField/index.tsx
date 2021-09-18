import React, { useRef } from 'react';
import { Animated, Text, TextInput, View } from 'react-native';
import { StandardTextFieldProps } from './interfaces';
import styles from './styles';

const StandardTextField: React.FC<StandardTextFieldProps> = ({
  label,
  error,
  value,
  onChangeText,
  isPassword,
}) => {
  const textAnim = useRef(new Animated.Value(1)).current;

  const labelToBottom = () => {
    Animated.timing(textAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  const labelToTop = () => {
    Animated.timing(textAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, !!error && styles.containerError]}>
        <Animated.Text
          style={[
            styles.label,
            !!error && styles.labelError,
            {
              top: textAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 26],
              }),
              fontSize: textAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [8, 16],
              }),
              lineHeight: textAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [12, 20],
              }),
            },
          ]}>
          {label}
        </Animated.Text>
        <TextInput
          secureTextEntry={isPassword}
          style={styles.input}
          onFocus={() => !value && labelToTop()}
          onBlur={() => !value && labelToBottom()}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      {!!error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

export default StandardTextField;
