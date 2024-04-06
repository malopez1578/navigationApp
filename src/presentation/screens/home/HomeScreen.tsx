import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Products"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
