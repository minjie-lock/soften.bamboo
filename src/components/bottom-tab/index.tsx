import type {
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

/**
 * @function BottomTabs
 * @param props 
 * @description 底部导航栏
 * @returns {React.ReactNode}
 */
export default function BottomTabs(props: BottomTabBarProps): React.ReactNode {

  const {
    state,
  } = props;

  const onLink = () => {

  };

  return (
    <view>
      {
        state.routes.map(route => {
          const onPress = () => {
            onLink();
          };
          return (
            <view key={route.key}>
              {/* <text>{state.routeNames}</text> */}
            </view>
          );
        })
      }
    </view>
  );
}
