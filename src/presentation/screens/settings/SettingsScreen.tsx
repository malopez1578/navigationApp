import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {globalStyles} from '../../theme/theme';

export const SettingsScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>SettingsScreen</Text>
      <PrimaryButton label="Go to Back" onPress={() => navigator.goBack()} />
      <PrimaryButton
        label="Go to Home"
        onPress={() => navigator.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
