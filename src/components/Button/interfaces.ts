import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ColorType = 'primary' | 'secondary';

export type Variant = 'contained' | 'outlined' | 'text';

export interface ButtonClasses {
  text?: StyleProp<TextStyle>;
  container?: StyleProp<ViewStyle>;
}

export interface ButtonProps {
  variant?: Variant;
  color?: ColorType;
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
  classes?: ButtonClasses;
}
