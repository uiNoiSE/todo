import React from "react";
import { SafeAreaView, StatusBar, View, Text } from "react-native";

import CustomButton from "../components/CustomButton";
import Decorations from "../components/Decorations";
import mainStyles from "../assets/styles/mainStyles";

export default function Intro(props) {
  return (
    <SafeAreaView style={mainStyles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <Decorations />
      <View style={[mainStyles.contentWrapper, { marginBottom: 71 }]}>
        <Text style={[mainStyles.heaging, { marginBottom: 19 }]}>
          Let’s get things done on time
        </Text>
        <Text
          style={[
            mainStyles.sectionDescription,
            { height: 90, marginBottom: 65 },
          ]}
        >
          {
            "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Telluspraesent purus\ntincidunt ut cursus vitae. Nisl, vitae nulla\nlectus tortor, est a aliquam. Pretium netus"
          }
        </Text>
        <CustomButton
          text={"Get Started"}
          navigation={props.navigation}
          hopTo={"Sign Up"}
        />
      </View>
    </SafeAreaView>
  );
}
