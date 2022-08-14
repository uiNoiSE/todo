import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
} from "react-native";

import { mainStyles as MS } from "../assets/styles/mainStyles";

import CustomButton from "../components/CustomButton";
import Decorations from "../components/Decorations";
import InlinePropose from "../components/InlinePropose";
import Input from "../components/Input";

export default function SignUp({ navigation }) {
  return (
    <SafeAreaView style={MS.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <Decorations />
      <View style={MS.wrapper}>
        <Text style={[MS.heading, MS.heading_SignUp]}>Welcome Onboard!</Text>
        <Text style={(MS.description, MS.description_SignUp)}>
          We help you meet up you tasks on time.
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={MS.form}
        >
          <Input placeholder="Enter your full name" />
          <Input placeholder="Enter your email" />
          <Input placeholder="Enter password" />
          <Input placeholder="Confirm password" />
        </KeyboardAvoidingView>
        <CustomButton
          f={() => navigation.navigate("Sign In")}
          text={"Register"}
        />
        <InlinePropose
          f={() => navigation.navigate("Sign In")}
          text={"Already have an account?"}
          linkText={"Sign In"}
        />
      </View>
    </SafeAreaView>
  );
}
