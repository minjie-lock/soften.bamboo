// import {
//   createNativeStackNavigator
// } from "@react-navigation/native-stack";

import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { BottomTabs } from '@/components';
import { lazy } from 'react';

const Docs = lazy(() => import('@/pages/docs'));
const Start = lazy(() => import('@/pages/start'));

/**
 * @constant {BottomTabNavigator}
 * @description 底部导航栏
 */
const BottomTabNavigator = createBottomTabNavigator({
  screenOptions: {
    animation: 'fade',
  },
  tabBar: (props) => <BottomTabs {...props} />,
  screens: {
    Start: {
      options: {
        headerShown: false,
        tabBarShowLabel: false,
      },
      screen: Start,
    },
    Docs: {
      options: {
        headerShown: false,
        tabBarShowLabel: false,
      },
      screen: Docs,
    }
  },
});

export default BottomTabNavigator;
