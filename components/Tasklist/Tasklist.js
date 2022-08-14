import React, { useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";

import CustomModal from "../CustomModal";
import CheckBox from "../Checkbox";

import { TasklistStyles as TLS } from "./TasklistStyles";
import { mainStyles as MS } from "../../assets/styles/mainStyles";
import AddTaskButton from "../../assets/svg/addTaskButton";

export default function Tasklist() {
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => <CheckBox item={item} />;

  return (
    <View style={TLS.wrapper}>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={TLS.listHeader}>
        <Text style={MS.heading}>Daily Tasks</Text>
        <Pressable hitSlop={18} onPress={() => setModalVisible(true)}>
          <AddTaskButton />
        </Pressable>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

let DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "1 Item",
    checked: false,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "2 Item",
    checked: true,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "3 Item",
    checked: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28gfdgba",
    title: "4 Item",
    checked: false,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aathgfh97f63",
    title: "5 Item",
    checked: false,
  },
  {
    id: "58694a0f-3da1-471f-bd96-1455jfgjf71e29d72",
    title: "6 Item",
    checked: true,
  },
];
