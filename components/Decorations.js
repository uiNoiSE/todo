import { View } from "react-native";
import DecorationsStyles from "../assets/styles/Decorations";

export default function Decorations(props) {
  return (
    <>
      <View
        style={[
          DecorationsStyles.Decorations,
          DecorationsStyles.Decorations._first,
          props.color
        ]}
      ></View>
      <View
        style={[
          DecorationsStyles.Decorations,
          DecorationsStyles.Decorations._second,
          props.color
        ]}
      ></View>
    </>
  );
}
