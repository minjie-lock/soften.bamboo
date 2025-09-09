

/**
 * @function Start
 * @description 起始
 * @returns {React.ReactNode}
 */
export default function Start(): React.ReactNode {

  return (
    <view className="flex flex-col p-5 bg-[#f5f5f5] dark:bg-[#151515] w-screen h-screen">
      <view className="flex flex-col gap-2 mt-12">
        <text className="dark:text-white text-4xl font-bold">
          Welcome use Soften
        </text>
        <text className="text-blue-500 text-4xl font-bold">
          Bamboo
        </text>
      </view>
      <view className="flex flex-col">
        <view className="flex flex-row">
          {/* <image source="" /> */}
        </view>
      </view>
    </view>
  );
};