import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#7037eb',
  secondary: '#f72585',
  tertiary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#ffba08',
  danger: '#ff0000',
  dark: '#22223b',
  background: '#fff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    padding: 10,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },
});
