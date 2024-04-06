/* eslint-disable react/no-unstable-nested-components */
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

const MenuButton = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
      <Text>Menu</Text>
    </Pressable>
  );
};

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <MenuButton />,
    });
  }, [navigation]);

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
