import { StatusBar, SafeAreaView, View, Text, Pressable } from "react-native";
import mainStyles from "../assets/styles/mainStyles";

import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import Decorations from "../components/Decorations";

export default function Login(props) {
  return (
    <SafeAreaView style={mainStyles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <Decorations />
      <View style={mainStyles.contentWrapper}>
        <Text>Welcome Back!</Text>
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter password" />
        <CustomButton
          text={"Sign In"}
          navigation={props.navigation}
          hopTo={"Intro"}
        />
        <View>
          <Text>Already have an account?</Text>
          <Pressable onPress={() => props.navigation.navigate("Sign Up")}>
            <Text>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
