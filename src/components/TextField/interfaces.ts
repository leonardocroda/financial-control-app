export interface TextFieldProps {
  label?: string;
  error?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  variant?: 'outlined' | 'standard';
}
