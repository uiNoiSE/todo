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
import InlinePropose from "../components/InlinePropose";

export default function Login(props) {
  return (
    <SafeAreaView style={mainStyles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <Decorations />
      <View style={mainStyles.contentWrapper}>
        <Text style={[mainStyles.heaging, { marginBottom: 47 }]}>
          Welcome Back!
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={mainStyles.form}
          onPress={Keyboard.dismiss}
        >
          <Input placeholder="Enter your email" />
          <Input
            marginBottom={{ marginBottom: 0 }}
            placeholder="Enter password"
          />

          <InlinePropose
            navigation={props.navigation}
            hopTo={"Sign Up"}
            text={""}
            linkText={"Forgot Password"}
          />
        </KeyboardAvoidingView>

        <CustomButton
          text={"Sign In"}
          navigation={props.navigation}
          hopTo={"Todo"}
        />
        <InlinePropose
          navigation={props.navigation}
          text={"Don’t have an account?"}
          hopTo={"Sign Up"}
          linkText={"Sign Up"}
        />
      </View>
    </SafeAreaView>
  );
}
