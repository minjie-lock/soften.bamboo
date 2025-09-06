import { type mergeConfig } from '@react-native/metro-config';
type MetroConfig = Parameters<typeof mergeConfig>;
export default function SoftenNativeMetro(configuration: (metro: MetroConfig[1]) => ReturnType<typeof mergeConfig>): any;
export {};
