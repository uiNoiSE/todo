import { TextInput } from "react-native";
import { InputStyles as IS } from "../Input/InputStyles";

const ModalInput = ({ placeholder, af, onChangeText }) => {
  return (
    <TextInput
      placeholderTextColor="#000"
      underlineColorAndroid="transparent"
      returnKeyType="done"
      onChangeText={onChangeText}
      style={IS.textfield}
      placeholder={placeholder}
      autoFocus={af}
    />
  );
};

export default ModalInput;
