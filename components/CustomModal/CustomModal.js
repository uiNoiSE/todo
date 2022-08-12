import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import { mainStyles as MS } from "../../assets/styles/mainStyles";
import { CustomModal as CM } from "./CustomModalStyles";

import CustomButton from "../CustomButton/CustomButton";
import Input from "../Input/Input";

export default function CustomModal({ modalVisible, setModalVisible }) {
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
                <Text style={[MS.heading, MS.heading__Modal]}>
                  Add new task
                </Text>
                <Input af={true} placeholder="Add your task here" />
                <CustomButton
                  text={"Submit"}
                  f={() => setModalVisible(!modalVisible)}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
}
