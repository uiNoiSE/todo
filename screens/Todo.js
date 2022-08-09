import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import Decorations from "../components/Decorations";
import Clock from "../components/Clock";
import mainStyles from "../assets/styles/mainStyles";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "1 Item",
    isChecked: "false",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "2 Item",
    isChecked: "false",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "3 Item",
    isChecked: "false",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28gfdgba",
    title: "4 Item",
    isChecked: "false",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aathgfh97f63",
    title: "5 Item",
    isChecked: "false",
  },
  {
    id: "58694a0f-3da1-471f-bd96-1455jfgjf71e29d72",
    title: "6 Item",
    isChecked: "false",
  },
];

export default function Todo(props) {
  const [time, setTime] = useState([]);
  const getTime = () => {
    return new Date().toLocaleTimeString("UTC");
  };

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const time = date.toLocaleTimeString("UTC");
      setTime(() => [...time.split(":")]);
    };
    updateTime();
    const interval = setInterval(() => updateTime(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderItem = ({ item }) => <Item item={item} />;
  const Item = ({ item }) => {
    const { title, isChecked } = item;

    return (
      <BouncyCheckbox
        size={18}
        style={{ paddingHorizontal: 5, paddingBottom: 15 }}
        text={title}
        textStyle={[
          styles.title,
          { textDecorationColor: "#FFD615", textDecorationStyle: "solid" },
        ]}
        iconStyle={{
          borderRadius: 0,
          borderWidth: 2,
        }}
        innerIconStyle={{
          borderRadius: 0,
          borderColor: "#000",
        }}
        fillColor="#FFD615"
        iconComponent={<></>}
        onPress={() => !isChecked}
      />
    );
  };

  return (
    <SafeAreaView
      style={[mainStyles.mainContainer, { backgroundColor: "#FFD615" }]}
    >
      <StatusBar barStyle="dark-content" />
      <Decorations color={{ backgroundColor: "rgba(255, 252, 238, 0.47)" }} />
      <View style={{ flex: 1, width: "100%", padding: 0 }}>
        <View
          style={{
            width: "100%",
            height: 215,
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* EXIT */}
          <View
            style={{
              display: "flex",
              width: "100%",
              height: 48,

              paddingHorizontal: 18,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                width: 24,
                height: 24,
                backgroundColor: "black",
              }}
            >
              X
            </Text>
          </View>
          {/* AVATAR */}
          <View
            style={{
              width: 100,
              height: 100,
              marginBottom: 18,

              backgroundColor: "black",
              borderRadius: "100%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: [{ rotateZ: "90deg" }],
            }}
          >
            <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
              {":^)"}
            </Text>
          </View>

          <Text style={mainStyles.heaging}>Welcome Anand!</Text>
        </View>

        <View
          style={{
            backgroundColor: "#F5F5F5",
            flex: 1,
            alignItems: "center",
            paddingHorizontal: 25,
          }}
        >
          <Clock time={time} />
          <Text
            style={{
              marginBottom: 16,
              alignSelf: "flex-start",
              fontFamily: "Poppins_700Bold",
              fontSize: 18,
              lineHeight: 27,
            }}
          >
            Tasks List
          </Text>

          {/* TASKLIST */}
          <View
            style={{
              width: "100%",
              height: 279,
              backgroundColor: "#FFFFFF",
              paddingTop: 13,
              paddingHorizontal: 20,
              paddingBottom: 20,
              borderRadius: 12,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <Text style={mainStyles.heaging}>Daily Tasks</Text>
              <Pressable>
                <Text>+</Text>
              </Pressable>
            </View>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            ></FlatList>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  title: {
    color: "#000",
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 21,
  },
});
