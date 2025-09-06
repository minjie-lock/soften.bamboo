import type {
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

export default function BottomTabs(props: BottomTabBarProps) {

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
              <text>{state.routeNames}</text>
            </view>
          );
        })
      }
    </view>
  );
}
