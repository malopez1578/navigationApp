import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParams} from './StackNavigator';

export const DrawerContent = (_props: DrawerContentComponentProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <DrawerItem onPress={() => navigation.navigate('Home')} label="Home" />
      <DrawerItem
        onPress={() => navigation.navigate('Products')}
        label="Products"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
