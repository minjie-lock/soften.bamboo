

/**
 * @function Start
 * @description 起始
 * @returns {React.ReactNode}
 */
export default function Start(): React.ReactNode {

  return (
    <safe-area-view>
      <status-bar />
      <view className="flex flex-col p-5 bg-[#f5f5f5] dark:bg-[#151515] w-screen h-screen">
        <view className="flex flex-col gap-2">
          <text className="dark:text-white text-4xl font-bold">
            Welcome use Soften
          </text>
          <text className="text-blue-500 text-4xl font-bold">
            Bamboo
          </text>
        </view>
        <view className="flex flex-col">
          <view className="flex flex-row">

          </view>
        </view>
      </view>
    </safe-area-view>
  );
};