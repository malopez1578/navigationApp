/* eslint-disable react/no-unstable-nested-components */
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import {RootStackParams} from '../../routes/StackNavigator';

export const MenuButton = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, [navigation]);
  return <></>;
};
