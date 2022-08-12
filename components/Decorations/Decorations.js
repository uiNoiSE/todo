import { View } from "react-native";
import { DecorationsStyles as DS } from "./DecorationsStyles";

export default function Decorations({ color }) {
  return (
    <>
      <View style={[DS.circle, DS.circle_first, color]}></View>
      <View style={[DS.circle, DS.circle_second, color]}></View>
    </>
  );
}
