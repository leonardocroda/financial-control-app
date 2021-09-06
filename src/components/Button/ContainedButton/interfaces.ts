import { ReactNode } from 'react';
import { ButtonClasses, ColorType } from '../interfaces';

export interface ContainedButtonProps {
  children: ReactNode;
  onPress: () => void;
  color?: ColorType;
  disabled?: boolean;
  classes?: ButtonClasses;
}
