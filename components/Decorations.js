import { View } from "react-native";
import DecorationsStyles from "../assets/styles/Decorations";

export default function Decorations() {
  return (
    <>
      <View
        style={[
          DecorationsStyles.Decorations,
          DecorationsStyles.Decorations._first,
        ]}
      ></View>
      <View
        style={[
          DecorationsStyles.Decorations,
          DecorationsStyles.Decorations._second,
        ]}
      ></View>
    </>
  );
}
