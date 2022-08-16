import { TextInput } from "react-native";
import { InputStyles as IS } from "../Input/InputStyles";

const ModalInput = ({ placeholder, af }) => {
  return (
    <TextInput
      placeholderTextColor="#000"
      underlineColorAndroid="transparent"
      returnKeyType="done"
      style={IS.textfield}
      placeholder={placeholder}
      autoFocus={af}
    />
  );
};

export default ModalInput;
