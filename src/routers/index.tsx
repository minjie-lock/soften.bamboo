// import {
//   createNativeStackNavigator
// } from "@react-navigation/native-stack";

import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { Start } from '@/pages';
import { BottomTabs } from '@/components';


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
  },
});

export default BottomTabNavigator;
