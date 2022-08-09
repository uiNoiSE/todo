import { TextInput, StyleSheet } from "react-native";

export default function Input(props) {
  return (
    <TextInput
      placeholderTextColor="#000"
      underlineColorAndroid="transparent"
      returnKeyType="next"
      // onSubmitEditing={() => } for future "hop to next text field from KB press next"
      style={[style.button, props.marginBottom]}
      placeholder={props.placeholder}
    />
  );
}

const style = StyleSheet.create({
  button: {
    width: "100%",
    height: 49,
    marginBottom: 26,
    paddingHorizontal: 29,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
  },
});
