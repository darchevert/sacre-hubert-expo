import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import PrefereesScreen from '../screens/PrefereesScreen';
import RepliquesScreen from '../screens/RepliquesScreen';
import AccountScreen from '../screens/AccountScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Account: {
      screen: AccountScreen,
    },
    Répliques: {
      screen: RepliquesScreen,
    },
    Préférées: {
      screen: PrefereesScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Préférées':
            iconName = Platform.OS === 'ios' ? `ios-star${focused ? '' : '-outline'}` : 'md-star';
            break;
          case 'Répliques':
            iconName = Platform.OS === 'ios' ? `ios-chatboxes${focused ? '' : '-outline'}` : 'md-chatboxes';
            break;
          case 'Account':
            iconName = Platform.OS === 'ios' ? `ios-settings${focused ? '' : '-outline'}` : 'md-settings';

        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
