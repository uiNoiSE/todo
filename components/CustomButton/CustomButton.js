import { Pressable, Text } from "react-native";
import { mainStyles as MS } from "../../assets/styles/mainStyles";

export default function CustomButton({ text, f, disabled }) {
  return (
    <Pressable disabled={disabled} style={MS.Button} onPress={f}>
      <Text style={MS.Button__text}>{text}</Text>
    </Pressable>
  );
}
