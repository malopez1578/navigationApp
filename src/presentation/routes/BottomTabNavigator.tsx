import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {Tab2Screen} from '../screens/tabs/Tab2Screen';
import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import {globalColors} from '../theme/theme';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarLabelStyle: {marginBottom: 5},
        tabBarActiveBackgroundColor: globalColors.primary,
        tabBarActiveTintColor: 'white',
        tabBarInactiveBackgroundColor: globalColors.primary,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          borderRadius: 100,
          paddingVertical: 10,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Tab 1',
        }}
        name="tab1"
        component={Tab1Screen}
      />
      <Tab.Screen
        options={{
          title: 'Tab 2',
        }}
        name="tab2"
        component={Tab2Screen}
      />
      <Tab.Screen
        options={{
          title: 'Tab 3',
        }}
        name="tab3"
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
};
