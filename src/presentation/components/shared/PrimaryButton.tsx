import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

export const PrimaryButton = ({onPress, label}: PrimaryButtonProps) => {
  return (
    <Pressable onPress={() => onPress()} style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
