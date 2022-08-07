import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
  mainContainer: {
    overflow: "hidden",
    position: "relative",
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  contentWrapper: {
    flex: 1,
    paddingHorizontal: 33,
    alignItems: "center",
    justifyContent: "center",
  },

  heaging: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    lineHeight: 27,
  },

  sectionDescription: {
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    lineHeight: 18,
  },

  Button: {
    width: "100%",
    height: 90,

    backgroundColor: "#FFD615",
    alignItems: "center",
    justifyContent: "center",

    Text: {
      color: "#030303",
      fontFamily: "Poppins_700Bold",
      fontSize: 22,
      lineHeight: 33,
    },
  },
});

export default mainStyles;
