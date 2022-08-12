import { Pressable, Text, View } from "react-native";
import { InlineProposeStyles as IPS } from "./InlineProposeStyles";

export default function InlinePropose({ f, text, linkText }) {
  return (
    <View style={IPS.wrapper}>
      <Text style={IPS.text}>{text ? `${text + "  "}` : null}</Text>
      <Pressable onPress={f}>
        <Text style={[IPS.text, IPS.link]}>{linkText}</Text>
      </Pressable>
    </View>
  );
}
