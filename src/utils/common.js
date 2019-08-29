import { Platform, Dimensions } from "react-native";

export const isWeb = Platform.OS === "web";
export const isNative = !isWeb;
export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const isDesktop =
  isWeb &&
  typeof matchMedia !== "undefined" &&
  matchMedia("(min-width: 768px)").matches;
export const isMobile = !isDesktop;
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
