import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
  },
  {
    id: 6,
    name: 'Product 6',
    price: 600,
  },
  {
    id: 7,
    name: 'Product 7',
    price: 700,
  },
  {
    id: 8,
    name: 'Product 8',
    price: 800,
  },
  {
    id: 9,
    name: 'Product 9',
    price: 900,
  },
  {
    id: 10,
    name: 'Product 10',
    price: 1000,
  },
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text>ProductsScreen</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <PrimaryButton
            label={item.name}
            onPress={() =>
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
                price: item.price,
              })
            }
          />
        )}
      />
      <Text>Ajustes</Text>
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};
