import { TextInput } from "react-native";
import { InputStyles as IS } from "./InputStyles";

export default function Input({ marginBottom, placeholder, af }) {
  return (
    <TextInput
      placeholderTextColor="#000"
      underlineColorAndroid="transparent"
      returnKeyType="next"
      // onSubmitEditing={() => } for future "hop to next text field from KB press next"
      style={[IS.textfield, marginBottom]}
      placeholder={placeholder}
      autoFocus={af}
    />
  );
}
