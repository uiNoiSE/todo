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
import ModalInput from "./ModalInput";

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
                <Text style={[MS.heading, MS.heading_Modal]}>Add new task</Text>
                <ModalInput
                  af={true}
                  placeholder="Add your task here"
                  onChangeText={() => console.log("Modal input")}
                />
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
