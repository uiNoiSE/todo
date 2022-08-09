import { Pressable, Text, View } from "react-native";
import InlineProposeStyle from "../assets/styles/InlinePropose";

export default function InlinePropose(props) {
  return (
    <View style={InlineProposeStyle.Wrapper}>
      <Text style={InlineProposeStyle.Text}>{`${props.text} `}</Text>
      <Pressable onPress={() => props.navigation.navigate(props.hopTo)}>
        <Text style={[InlineProposeStyle.Text, InlineProposeStyle.Link]}>
          {props.linkText}
        </Text>
      </Pressable>
    </View>
  );
}
