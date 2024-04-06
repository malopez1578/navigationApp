import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

export const ProductScreen = () => {
  const {params} = useRoute<RouteProp<RootStackParams, 'Product'>>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params?.name,
    });
  }, [navigation, params?.name]);

  return (
    <View style={globalStyles.container}>
      <Text>{params?.name}</Text>
    </View>
  );
};
