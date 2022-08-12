import { Pressable, Text } from "react-native";
import { mainStyles as MS } from "../../assets/styles/mainStyles";

export default function CustomButton({ text, f }) {
  return (
    <Pressable style={MS.Button} onPress={f}>
      <Text style={MS.Button__text}>{text}</Text>
    </Pressable>
  );
}
