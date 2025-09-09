/**
 * @function Docs
 * @description 文档
 * @returns {React.ReactNode}
 */
export default function Docs(): React.ReactNode {
  return (
    <view className="w-screen h-screen p-5 dark:bg-[#151515] relative">
      <view className="bg-blue-200 w-200 h-200 absolute top-0 left-0" />
      <view className="mt-12">
        <text className="text-center text-2xl font-bold dark:text-white">
          Review the documentation.
        </text>
      </view>
    </view>
  )
}