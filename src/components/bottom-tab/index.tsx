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
    navigation,
    insets,
  } = props;

  return (
    <view className="flex flex-row justify-around h-[50px] items-center">
      {
        state.routes.map(route => {
          const onPress = () => {
            navigation.navigate(route.name);
          };
          return (
            <view key={route.key} className="flex">
              <touchable-opacity className="" onPress={onPress}>
                <text className="dark:text-white">
                  {route.name}
                </text>
              </touchable-opacity>
            </view>
          );
        })
      }
    </view>
  );
}
