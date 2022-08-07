import { StyleSheet } from "react-native";

const DecorationsStyles = StyleSheet.create({
  Decorations: {
    position: "absolute",

    width: 173,
    height: 173,

    borderRadius: "100%",
    backgroundColor: "rgba(255, 214, 21, 0.47)",

    _first: {
      top: -24,
      left: -74,
    },

    _second: {
      top: -86,
    },
  },
});

export default DecorationsStyles;
