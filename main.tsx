import {
  createStaticNavigation,
} from '@react-navigation/native';
import BottomTabNavigator from '@/routers';
import '@/styles/tailwind.css'
import React from 'react';

const StaticNavigation = createStaticNavigation(BottomTabNavigator);

/**
 * @function Root
 * @description 根组件
 * @returns {React.ReactNode}
 */
export default function Root(): React.ReactNode {

  return (
    <StaticNavigation
    
    />
  );
}

