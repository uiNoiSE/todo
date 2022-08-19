import React from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import { cache } from "../../store";

import { mainStyles as MS } from "../../assets/styles/mainStyles";
import { CustomModal as CM } from "./CustomModalStyles";

import CustomButton from "../CustomButton/CustomButton";
import ModalInput from "./ModalInput";

export default function CustomModal({
  modalVisible,
  setModalVisible,
  setTodos,
  newTodo,
  setNewTodo,
}) {
  const addNewTask = () => {
    setTodos((prev) => [
      ...prev,
      { title: newTodo, id: uuidv4(), checked: false },
    ]);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={CM.wrapper}>
            <TouchableWithoutFeedback activeOpacity={1}>
              <View style={CM.contentWrapper}>
                <Text style={[MS.heading, MS.heading_Modal]}>Add new task</Text>
                <ModalInput
                  value={newTodo}
                  af={true}
                  placeholder="Add your task here"
                  onChangeText={setNewTodo}
                />
                <CustomButton
                  text={"Submit"}
                  f={() => {
                    addNewTask();
                    setModalVisible(!modalVisible);
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
}
