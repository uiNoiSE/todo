import { Pressable, Text } from "react-native";
import mainStyles from "../assets/styles/mainStyles";

export default function CustomButton(props) {
  return (
    <Pressable
      style={mainStyles.Button}
      onPress={() => props.navigation.navigate(props.hopTo)}
    >
      <Text style={mainStyles.Button.Text}>{props.text}</Text>
    </Pressable>
  );
}
