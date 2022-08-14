import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import { mainStyles as MS } from "../assets/styles/mainStyles";
import LoginImage from "../assets/svg/login";

import InlinePropose from "../components/InlinePropose";
import CustomButton from "../components/CustomButton";
import Decorations from "../components/Decorations";
import Input from "../components/Input";

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={MS.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <Decorations />
      <View style={MS.wrapper}>
        <Text style={[MS.heading, MS.heading_SignIn]}>Welcome Back!</Text>
        <LoginImage style={{ marginBottom: 47 }} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={MS.form}
          onPress={Keyboard.dismiss}
        >
          <Input placeholder="Enter your email" />
          <Input
            marginBottom={{ marginBottom: 0 }}
            placeholder="Enter password"
          />

          <InlinePropose
            f={() => navigation.navigate("Sign Up")}
            linkText={"Forgot Password"}
          />
        </KeyboardAvoidingView>

        <CustomButton f={() => navigation.navigate("Todo")} text={"Sign In"} />
        <InlinePropose
          f={() => navigation.navigate("Sign Up")}
          text={"Don’t have an account?"}
          linkText={"Sign Up"}
        />
      </View>
    </SafeAreaView>
  );
}
