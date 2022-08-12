import React from "react";
import { SafeAreaView, StatusBar, View, Text } from "react-native";

import { mainStyles as MS } from "../assets/styles/mainStyles";
import IntroImage from "../assets/svg/intro";

import CustomButton from "../components/CustomButton/CustomButton";
import Decorations from "../components/Decorations/Decorations";

export default function Intro({ navigation }) {
  return (
    <SafeAreaView style={MS.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <Decorations />
      <View style={[MS.wrapper, MS.wrapper_Intro]}>
        <IntroImage style={{ marginBottom: 42 }} />
        <Text style={[MS.heading, MS.heading_Intro]}>
          Let’s get things done on time
        </Text>
        <Text style={[MS.description, MS.description_Intro]}>
          {
            "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Telluspraesent purus\ntincidunt ut cursus vitae. Nisl, vitae nulla\nlectus tortor, est a aliquam. Pretium netus"
          }
        </Text>
        <CustomButton
          f={() => navigation.navigate("Sign Up")}
          text={"Get Started"}
        />
      </View>
    </SafeAreaView>
  );
}
