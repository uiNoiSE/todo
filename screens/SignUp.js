import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import mainStyles from "../assets/styles/mainStyles";

import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import Decorations from "../components/Decorations";
import InlinePropose from "../components/InlinePropose";

export default function SignUp(props) {
  return (
    <SafeAreaView style={mainStyles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <Decorations />
      <View style={mainStyles.contentWrapper} onPress={Keyboard.dismiss}>
        <Text style={[mainStyles.heaging, { marginBottom: 16 }]}>
          Welcome Onboard!
        </Text>
        <Text style={[mainStyles.sectionDescription, { marginBottom: 66 }]}>
          We help you meet up you tasks on time.
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={mainStyles.form}
        >
          <Input placeholder="Enter your full name" />
          <Input placeholder="Enter your email" />
          <Input placeholder="Enter password" />
          <Input placeholder="Confirm password" />
        </KeyboardAvoidingView>
        <CustomButton
          text={"Register"}
          navigation={props.navigation}
          hopTo={"Login"}
        />
        <InlinePropose
          navigation={props.navigation}
          text={"Already have an account?"}
          hopTo={"Login"}
          linkText={"Sign In"}
        />
      </View>
    </SafeAreaView>
  );
}
