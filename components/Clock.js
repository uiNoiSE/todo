import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Clock({ time }) {
  const item = time.map((el, key) => (
    <View key={key} style={ClockStyle.ClockTile}>
      <View style={ClockStyle.ClockTile.accent} />
      <Text style={ClockStyle.ClockTileText}>{el}</Text>
    </View>
  ));

  return (
    <View style={ClockStyle.ClockContainer}>
      {item}
      <View style={ClockStyle.ClockContainer.colons}>
        <Text
          style={[
            ClockStyle.ClockTileText,
            ClockStyle.ClockContainer.colons.first,
          ]}
        >
          :
        </Text>
        <Text
          style={[
            ClockStyle.ClockTileText,
            ClockStyle.ClockContainer.colons.second,
          ]}
        >
          :
        </Text>
      </View>
    </View>
  );
}

const ClockStyle = StyleSheet.create({
  ClockContainer: {
    position: "relative",
    width: 291,
    height: 101,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    colons: {
      position: "absolute",

      width: "100%",
      height: "100%",

      first: {
        position: "absolute",
        top: 10,
        left: 83,
      },

      second: {
        position: "absolute",
        top: 10,
        right: 83,
      },
    },
  },

  ClockTile: {
    position: "relative",
    width: 75,
    height: 69,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FAE68C",
    borderRadius: 10,

    textAlign: "center",

    accent: {
      position: "absolute",
      bottom: 0,
      left: 0,

      width: "100%",
      height: 34,

      backgroundColor: "#FEE15B",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
  },

  ClockTileText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 56,
    lineHeight: 75,
  },
});
