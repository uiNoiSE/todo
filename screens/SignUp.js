import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import mainStyles from "../assets/styles/mainStyles";

import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import Decorations from "../components/Decorations";

export default function SignUp(props) {
  return (
    <SafeAreaView style={mainStyles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <Decorations />
      <KeyboardAvoidingView
        onPress={Keyboard.dismiss}
        style={mainStyles.contentWrapper}
      >
        <Text style={[mainStyles.heaging, { marginBottom: 16 }]}>
          Welcome Onboard!
        </Text>
        <Text style={[mainStyles.sectionDescription, { marginBottom: 66 }]}>
          We help you meet up you tasks on time.
        </Text>
        <Input placeholder="Enter your full name" />
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter password" />
        <Input placeholder="Confirm password" />
        <CustomButton
          text={"Register"}
          navigation={props.navigation}
          hopTo={"Login"}
        />
        <View>
          <Text>Already have an account?</Text>
          <Pressable onPress={() => props.navigation.navigate("Login")}>
            <Text>Sign In</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
