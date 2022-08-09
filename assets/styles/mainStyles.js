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
    justifyContent: "flex-end",
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
    borderRadius: 10,

    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 15,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.15);",
    elevation: 15,

    Text: {
      color: "#030303",
      fontFamily: "Poppins_700Bold",
      fontSize: 22,
      lineHeight: 33,
    },
  },

  form: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  }
});

export default mainStyles;
